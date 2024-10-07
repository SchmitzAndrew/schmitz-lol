from PIL import Image
import random

# Painting used: https://www.instagram.com/p/C94nztYRHOB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
def get_random_colors(image_path):
    image = Image.open(image_path)
    pixels = list(image.getdata())
    random_pixels = random.sample(pixels, 500)
    
    hex_colors = []
    for pixel in random_pixels:
        if len(pixel) >= 3:
            hex_colors.append(f"'text-[#{pixel[0]:02x}{pixel[1]:02x}{pixel[2]:02x}]',")
        else:
            print(f"Unexpected pixel format: {pixel}")
    
    return hex_colors

image_path = 'painting.png'
random_colors = get_random_colors(image_path)

print(f"Selected {len(random_colors)} random colors:")
for color in random_colors:
    print(color)
