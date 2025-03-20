from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from transformers import BioGptForCausalLM, AutoTokenizer

app = Flask(__name__)
CORS(app)

# Load the BioGPT model and tokenizer
model_name = "microsoft/biogpt"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = BioGptForCausalLM.from_pretrained(model_name, attn_implementation="sdpa", torch_dtype=torch.float32)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_input = data.get("message", "")

    if not user_input:
        return jsonify({"error": "Message is required"}), 400

    inputs = tokenizer(user_input, return_tensors="pt")
    outputs = model.generate(**inputs, max_length=100)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
