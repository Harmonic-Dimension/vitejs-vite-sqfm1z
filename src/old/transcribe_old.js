const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const openai_api_key = process.env.OPENAI_API_KEY;

async function transcribe(
  file,
  { model, prompt, response_format, temperature, language }
) {
  console.log('Transcribing...');
  console.log(openai_api_key);

  try {
    // Calling the Whisper API
    const resp = await openai.createTranscription(
      fs.createReadStream(file),
      model,
      prompt,
      response_format,
      temperature,
      language
    );
    console.log('Finished transcription');

    return resp;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

const configuration = new Configuration({
  apiKey: openai_api_key,
});

const openai = new OpenAIApi(configuration);

// Running the transcription
const file = 'Test_boombosch_1_eerste_30_sec.m4a';
const params = {
  model: 'whisper-1',
  prompt:
    'Hier volgt een geluidsopname van een gesprek tussen een fysiotherapeut en een patient',
  response_format: 'json',
  temperature: 0,
  language: 'nl',
};

const transcript = await transcribe(file, params);
console.log(transcript.data.text);
