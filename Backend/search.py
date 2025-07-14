from flask import Blueprint, request, jsonify
 
search_bp = Blueprint("search", __name__)
 
@search_bp.route("/api/search", methods=["GET"])
 
def search():
     query = request.args.get("query", "")
     return jsonify(results=[f"Result for {query} "])
     