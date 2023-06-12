// Script that creates the prompts per the specification of the OpenAI ChatCompletion API

const system_message = "Je bent een behulpzame assistent voor een fysiotherapeut. Je beschikt over veel vakkennis van fysiotherapie.";

// Functions to create each of the prompts using the transcript
function create_patient_needs_messages(transcript){
  const messages = 
  [
    {role: "system", content: system_message},
		{role: "user", content: `Hier volgt een transcript van een discussie tussen een fysiotherapeut en een patient: ${transcript} 
    Beschrijf kort de behoeften van de patient. (Waarom is de patient naar de fysiotherapeut gegaan? Wil de patient behandeld worden? etc.)`}
  ]
  return messages
}

//export default function create_medical_history_messages(input_text){
function create_medical_history_messages(transcript){
    const messages = 
    [
        { role: "system", content: system_message},
        { role: "user", content: `Hier volgt een transcript van een discussie tussen een fysiotherapeut en een patient: ${transcript}
        Beschrijf kort de historie van de klacht (ontstaan, trauma-analyse, aard en ernst). Gebruik de juiste klinische terminologie. Gebruik alleen informatie uit het transcript.` }
    ]
    return messages
}

function create_disorders_messages(transcript){
  const messages = 
  [
    {role: "system", content: system_message},
		{role: "user", content: `Hier volgt een transcript van een discussie tussen een fysiotherapeut en een patient: ${transcript}
		Beschrijf kort welke stoornissen volgen uit het onderzoek door de fysiotherapeut. (Welke tests zijn uitgevoerd? Wat zijn de uitkomsten hiervan? etc.)`}
	]
  return messages
}

function create_disabilities_messages(transcript){
  const messages = 
  [
    {role: "system", "content": system_message},
    {role: "user", "content": `Hier volgt een transcript van een discussie tussen een fysiotherapeut en een patient: ${transcript}
    Beschrijf kort welke beperkingen de patient ervaart. (Met welke activiteiten heeft de patient moeite? Wanneer doen de klachten zich voor? etc.)`}
  ]
  return messages
}

// Function which returns an object containing all prompts
export default function create_all_report_messages(transcript){
  return {patient_needs_messages: create_patient_needs_messages(transcript),
          medical_history_messages: create_medical_history_messages(transcript),
          disorders_messages: create_disorders_messages(transcript),
          disabilities_messages: create_disabilities_messages(transcript)
        }
}

//console.log(create_medical_history_messages("---------TEST TEXT------------"))