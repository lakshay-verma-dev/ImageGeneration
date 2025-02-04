// generateImage.js

const axios = require("axios");
require("dotenv").config(); // To load the API key from .env

// Function to generate image from OpenAI's API using a provided prompt
async function generateImage(prompt) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations", // OpenAI's image generation endpoint
      {
        prompt: prompt, // Prompt you input manually
        n: 1, // Number of images to generate
        size: "1024x1024", // Size of the generated image
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Authorization using API key
          "Content-Type": "application/json", // Content-Type header
        },
      }
    );

    // Get the image URL from the response
    const imageUrl = response.data.data[0].url;

    // Output the image URL
    console.log("Image generated successfully! URL:", imageUrl);
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

// Manually provide a prompt for image generation
const prompt = "A futuristic city at night with neon lights"; // You can change this to any prompt

// Call the function with the provided prompt
generateImage(prompt);
