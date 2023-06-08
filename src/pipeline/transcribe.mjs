//TODO: try rewriting in svelte

import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import path from 'path';
//dotenv allows for storing environment variables in a .env file.
import dotenv from 'dotenv';

// these two lines give us the current working directory
//const __filename = import.meta.url;
//const __dirname = path.dirname(new URL(__filename).pathname);

const __filename = import.meta.url;
const __dirname = new URL('.', __filename).pathname;

// to find the .env file, take the current working directory and move up two levels to the root directory
// NOTE: if the root is no longer two levels up from the current directory this will give an error
//dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });
dotenv.config({ path: __dirname + '/../../.env' });

const openai_api_key = process.env.OPENAI_API_KEY;

async function transcribe(
  file,
  { model, prompt, response_format, temperature, language }
) {
  console.log('Transcribing...');

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

export default transcript = await transcribe(file, params);
console.log(transcript.data.text);
