"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const cors_1 = require("@fastify/cors");
const get_all_prompts_1 = require("./routes/get-all-prompts");
const upload_video_1 = require("./routes/upload-video");
const create_transcription_1 = require("./routes/create-transcription");
const generate_ai_completion_1 = require("./routes/generate-ai-completion");
const app = (0, fastify_1.fastify)();
app.register(cors_1.fastifyCors, {
    origin: '*',
});
app.register(get_all_prompts_1.getAllPromptsRoute);
app.register(upload_video_1.uploadVideoRoute);
app.register(create_transcription_1.createTranscriptionRoute);
app.register(generate_ai_completion_1.generateAiCompletionRoute);
app.listen({
    port: Number(process.env.PORT) || 3000,
}).then((port) => {
    console.log('HTTP server running! on port: ', port);
});
