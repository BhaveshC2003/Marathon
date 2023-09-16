from flask import Flask, request, jsonify
import cv2
import face_recognition

app = Flask(__name__)

def find_face_encodings(image_path):
    image = cv2.imread(image_path)
    face_enc = face_recognition.face_encodings(image)
    return face_enc[0] if face_enc else None

@app.route('/compare', methods=['POST'])
def compare_images():
    try:
        data = request.json

        if 'image_1' not in data or 'image_2' not in data:
            return jsonify({"error": "Please provide both 'image_1' and 'image_2' paths"}), 400

        image_1_path = data['image_1']
        image_2_path = data['image_2']

        image_1_enc = find_face_encodings(image_1_path)
        image_2_enc = find_face_encodings(image_2_path)

        if image_1_enc is None or image_2_enc is None:
            return jsonify({"error": "Failed to detect faces in one or both images"}), 400

        is_same = face_recognition.compare_faces([image_1_enc], image_2_enc)[0]

        if is_same:
            distance = face_recognition.face_distance([image_1_enc], image_2_enc)
            accuracy = round((1 - distance[0]) * 100)

            result = {
                "message": "The images are the same.",
                "accuracy": accuracy
            }
        else:
            result = {
                "message": "The images are not the same."
            }

        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
