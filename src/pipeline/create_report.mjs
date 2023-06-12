// Function that runs the pipeline. The input is an audio file of the conversation, the output is the created report

import transcribe from '../pipeline/transcribe.mjs'
import create_report_from_transcription from '../pipeline/create_report_from_transcription.mjs'
import create_all_report_messages from '../pipeline/create_report_messages.mjs';

export default async function create_report(audio, api_key_value, useDummyText){

    //Specifying the parameters for the transcription call
    const transcription_params = {
        model: 'whisper-1',
        prompt: 'Hier volgt een geluidsopname van een gesprek tussen een fysiotherapeut en een patient',
        response_format: 'json',
        temperature: 0,
        language: 'nl'
    };

    // Specifying the model used for text completion
    const model = "gpt-3.5-turbo";

    let transcript_text;

    // Transcribing the recorded conversation
    if(useDummyText){
        transcript_text = "Je hebt toestemming gegeven dat ik dit gesprek opneem. Ja. Wat zijn je klachten? Nee, sorry, wat is jouw hulpvraag om mee te komen? Nou, ik heb al een tijdje last van mijn dijkbeen aan de bovenkant. Sinds hoe lang? Een jaar al. Ik ben er al mee naar de huisarts geweest en die heeft me al doorverwezen naar een fysio. Die heeft me al geholpen. Een jaar geleden. Die zei dat het de adductorspier was waar het probleem in zat. Die heeft het ook behandeld en dat is nu wel beter. Maar aan de buitenkant van mijn dijkbeen doet het nog steeds pijn. En wat is dan de reden dat je bij mij komt? Nou, vooral omdat ik me ergerde aan het feit dat ik niet goed kan fietsen op deze manier. En ik wil daar toch wel vanaf. Je zei dat je er al een tijdje last van hebt. Weet je bij benadering hoe lang? In enige vorm al meer dan een jaar nu. "
    }
    else{
        const transcript = await transcribe(audio, api_key_value, transcription_params);
        transcript_text = transcript.data.text;
    }
    console.log(transcript_text)

    // Creating the prompts using the transcript_text
    const prompts = create_all_report_messages(transcript_text);

    // Creating the medical report
    const report = await create_report_from_transcription(model, prompts, api_key_value);
    console.log(report);

    return report;
}