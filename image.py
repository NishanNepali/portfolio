import os
import json

def get_image_urls(folder_path):
    image_urls = []
    allowed_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.heic'}
    
    for filename in os.listdir(folder_path):
        _, extension = os.path.splitext(filename)
        if extension.lower() in allowed_extensions:
            image_urls.append(os.path.join(folder_path, filename))
    return image_urls

def create_json_file(image_urls, output_file):
    with open(output_file, 'w') as json_file:
        json.dump(image_urls, json_file, indent=4)

if __name__ == "__main__":
    folder_path = 'Nishan Image/'
    output_file = 'photoUrls.json'

    image_urls = get_image_urls(folder_path)
    create_json_file(image_urls, output_file)

    print(f"JSON file '{output_file}' created with {len(image_urls)} image URLs.")
