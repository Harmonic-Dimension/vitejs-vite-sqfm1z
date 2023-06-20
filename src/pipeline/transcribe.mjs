//TODO: try rewriting in svelte

import { Configuration, OpenAIApi } from 'openai';

export default async function transcribe(file, api_key, {model, prompt, response_format, temperature, language}) {
  const configuration = new Configuration({
    apiKey: api_key,
    formDataCtor: CustomFormData,
  });

  const openai = new OpenAIApi(configuration);

  console.log('Transcribing...');

  try {
    // Calling the Whisper API
    const resp = await openai.createTranscription(
      file,
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

// Weird fix suggested for "localVarFormParams.getHeaders is not a function" error during openai.createTranscription(): https://github.com/openai/openai-node/issues/75
// We use CustomFormData when assigning configuration
class CustomFormData extends FormData {
  getHeaders() {
    return {};
  }
}