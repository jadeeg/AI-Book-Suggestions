from flask import Blueprint, request, jsonify
import os
import requests

search_bp = Blueprint("search", __name__)

@search_bp.route("/search", methods=["GET"])
def search():
    query = request.args.get("query", "")
    try:
        api_key = os.getenv("API_KEY")
        context = os.getenv("API_PROMPT")
        api_url = os.getenv("API_URL")
        
        response = requests.get(
            api_url,
            params={
                "prompt": query,
                "context": context,
                "key": api_key
            },
            timeout=80
        )
        
        if response.status_code == 200:
            return jsonify({"results": [response.json()["answer"]]})
        else:
            print(f"API Error: {response.status_code}", response.text)
            return jsonify({"error": "Failed to get results"}), 500
            
    except Exception as e:
        print(f"Exception: {str(e)}")
        return jsonify({"error": str(e)}), 500
