const MODEL_CATALOG = [
  { id: "@cf/openai/gpt-oss-120b", label: "GPT-OSS 120B · OpenAI (Workers AI)", provider: "cf", schema: "responses" },
  { id: "@cf/openai/gpt-oss-20b", label: "GPT-OSS 20B · OpenAI (Workers AI)", provider: "cf", schema: "responses" },
  { id: "@cf/meta/llama-4-scout-17b-16e-instruct", label: "Llama 4 Scout 17B · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", label: "Llama 3.3 70B FP8 Fast · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.1-8b-instruct-fast", label: "Llama 3.1 8B Fast · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/deepgram/flux", label: "Flux · Deepgram (Workers AI)", provider: "cf" },
  { id: "@cf/pfnet/plamo-embedding-1b", label: "PLaMo Embedding 1B · PFN (Workers AI)", provider: "cf" },
  { id: "@cf/aisingapore/gemma-sea-lion-v4-27b-it", label: "SEA-LION v4 27B IT · AI Singapore (Workers AI)", provider: "cf" },
  { id: "@cf/ai4bharat/indictrans2-en-indic-1b", label: "IndicTrans2 EN↔Indic 1B · AI4Bharat (Workers AI)", provider: "cf" },
  { id: "@cf/google/embeddinggemma-300m", label: "EmbeddingGemma 300M · Google (Workers AI)", provider: "cf" },
  { id: "@cf/deepgram/aura-1", label: "Aura 1 TTS · Deepgram (Workers AI)", provider: "cf" },
  { id: "@cf/leonardo/lucid-origin", label: "Lucid Origin · Leonardo (Workers AI)", provider: "cf" },
  { id: "@cf/leonardo/phoenix-1.0", label: "Phoenix 1.0 · Leonardo (Workers AI)", provider: "cf" },
  { id: "@cf/pipecat-ai/smart-turn-v2", label: "Smart Turn v2 · Pipecat-AI (Workers AI)", provider: "cf" },
  { id: "@cf/deepgram/nova-3", label: "Nova 3 ASR · Deepgram (Workers AI)", provider: "cf" },
  { id: "@cf/google/gemma-3-12b-it", label: "Gemma 3 12B IT · Google (Workers AI)", provider: "cf" },
  { id: "@cf/mistral/mistral-small-3.1-24b-instruct", label: "Mistral Small 3.1 24B · Mistral (Workers AI)", provider: "cf" },
  { id: "@cf/qwen/qwq-32b", label: "QwQ 32B · Qwen (Workers AI)", provider: "cf" },
  { id: "@cf/qwen/qwen2.5-coder-32b-instruct", label: "Qwen2.5 Coder 32B · Qwen (Workers AI)", provider: "cf" },
  { id: "@cf/baai/bge-reranker-base", label: "BGE Reranker Base · BAAI (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-guard-3-8b", label: "Llama Guard 3 8B · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/deepseek/deepseek-r1-distill-qwen-32b", label: "DeepSeek R1 Distill Qwen 32B · DeepSeek (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.2-1b-instruct", label: "Llama 3.2 1B Instruct · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.2-3b-instruct", label: "Llama 3.2 3B Instruct · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.2-11b-vision-instruct", label: "Llama 3.2 11B Vision Instruct · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/blackforestlabs/flux-1-schnell", label: "FLUX.1 Schnell · Black Forest Labs (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.1-8b-instruct-awq", label: "Llama 3.1 8B AWQ · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.1-8b-instruct-fp8", label: "Llama 3.1 8B FP8 · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/myshell-ai/melotts", label: "MeloTTS · MyShell AI (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.1-8b-instruct", label: "Llama 3.1 8B Instruct · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/baai/bge-m3", label: "BGE M3 · BAAI (Workers AI)", provider: "cf" },
  { id: "@cf/meta/meta-llama-3-8b-instruct", label: "Meta Llama 3 8B Instruct · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/openai/whisper-large-v3-turbo", label: "Whisper Large V3 Turbo · OpenAI (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3-8b-instruct-awq", label: "Llama 3 8B AWQ · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/llava-hf/llava-1.5-7b-hf", label: "LLaVA 1.5 7B · LLaVA (Workers AI)", provider: "cf" },
  { id: "@cf/fblgit/una-cybertron-7b-v2-bf16", label: "Una Cybertron 7B v2 BF16 · FBLGit (Workers AI)", provider: "cf" },
  { id: "@cf/openai/whisper-tiny-en", label: "Whisper Tiny EN · OpenAI (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3-8b-instruct", label: "Llama 3 8B Instruct · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/mistral/mistral-7b-instruct-v0.2", label: "Mistral 7B Instruct v0.2 · Mistral (Workers AI)", provider: "cf" },
  { id: "@cf/google/gemma-7b-it-lora", label: "Gemma 7B IT LoRA · Google (Workers AI)", provider: "cf" },
  { id: "@cf/google/gemma-2b-it-lora", label: "Gemma 2B IT LoRA · Google (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-2-7b-chat-hf-lora", label: "Llama 2 7B Chat LoRA · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/google/gemma-7b-it", label: "Gemma 7B IT · Google (Workers AI)", provider: "cf" },
  { id: "@cf/nexusflow/starling-lm-7b-beta", label: "Starling LM 7B Beta · Nexusflow (Workers AI)", provider: "cf" },
  { id: "@cf/nousresearch/hermes-2-pro-mistral-7b", label: "Hermes 2 Pro Mistral 7B · NousResearch (Workers AI)", provider: "cf" },
  { id: "@cf/mistral/mistral-7b-instruct-v0.2-lora", label: "Mistral 7B Instruct v0.2 LoRA · Mistral (Workers AI)", provider: "cf" },
  { id: "@cf/qwen/qwen1.5-1.8b-chat", label: "Qwen1.5 1.8B Chat · Qwen (Workers AI)", provider: "cf" },
  { id: "@cf/unum/uform-gen2-qwen-500m", label: "UForm Gen2 Qwen 500M · Unum (Workers AI)", provider: "cf" },
  { id: "@cf/facebook/bart-large-cnn", label: "BART Large CNN · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/microsoft/phi-2", label: "Phi-2 · Microsoft (Workers AI)", provider: "cf" },
  { id: "@cf/tinyllama/tinyllama-1.1b-chat-v1.0", label: "TinyLlama 1.1B Chat v1.0 · TinyLlama (Workers AI)", provider: "cf" },
  { id: "@cf/qwen/qwen1.5-14b-chat-awq", label: "Qwen1.5 14B Chat AWQ · Qwen (Workers AI)", provider: "cf" },
  { id: "@cf/qwen/qwen1.5-7b-chat-awq", label: "Qwen1.5 7B Chat AWQ · Qwen (Workers AI)", provider: "cf" },
  { id: "@cf/qwen/qwen1.5-0.5b-chat", label: "Qwen1.5 0.5B Chat · Qwen (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/discolm-german-7b-v1-awq", label: "DiscoLM German 7B AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/tiiuae/falcon-7b-instruct", label: "Falcon 7B Instruct · TII (Workers AI)", provider: "cf" },
  { id: "@cf/openchat/openchat-3.5-0106", label: "OpenChat 3.5-0106 · OpenChat (Workers AI)", provider: "cf" },
  { id: "@cf/defog/sqlcoder-7b-2", label: "SQLCoder 7B 2 · Defog (Workers AI)", provider: "cf" },
  { id: "@cf/deepseek/deepseek-math-7b-instruct", label: "DeepSeek Math 7B Instruct · DeepSeek (Workers AI)", provider: "cf" },
  { id: "@cf/facebook/detr-resnet-50", label: "DETR ResNet-50 · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/bytedance/stable-diffusion-xl-lightning", label: "SDXL Lightning · ByteDance (Workers AI)", provider: "cf" },
  { id: "@cf/lykon/dreamshaper-8-lcm", label: "DreamShaper 8 LCM · Lykon (Workers AI)", provider: "cf" },
  { id: "@cf/runwayml/stable-diffusion-v1-5-img2img", label: "Stable Diffusion v1.5 Img2Img · RunwayML (Workers AI)", provider: "cf" },
  { id: "@cf/runwayml/stable-diffusion-v1-5-inpainting", label: "Stable Diffusion v1.5 Inpainting · RunwayML (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/deepseek-coder-6.7b-instruct-awq", label: "DeepSeek Coder 6.7B Instruct AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/deepseek-coder-6.7b-base-awq", label: "DeepSeek Coder 6.7B Base AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/llamaguard-7b-awq", label: "LlamaGuard 7B AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/neural-chat-7b-v3-1-awq", label: "Neural Chat 7B v3.1 AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/openhermes-2.5-mistral-7b-awq", label: "OpenHermes 2.5 Mistral 7B AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/llama-2-13b-chat-awq", label: "Llama 2 13B Chat AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/mistral-7b-instruct-v0.1-awq", label: "Mistral 7B Instruct v0.1 AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/thebloke/zephyr-7b-beta-awq", label: "Zephyr 7B Beta AWQ · TheBloke (Workers AI)", provider: "cf" },
  { id: "@cf/stabilityai/stable-diffusion-xl-base-1.0", label: "SDXL Base 1.0 · Stability AI (Workers AI)", provider: "cf" },
  { id: "@cf/baai/bge-large-en-v1.5", label: "BGE Large EN v1.5 · BAAI (Workers AI)", provider: "cf" },
  { id: "@cf/baai/bge-small-en-v1.5", label: "BGE Small EN v1.5 · BAAI (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-2-7b-chat-fp16", label: "Llama 2 7B Chat FP16 · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/mistral/mistral-7b-instruct-v0.1", label: "Mistral 7B Instruct v0.1 · Mistral (Workers AI)", provider: "cf" },
  { id: "@cf/baai/bge-base-en-v1.5", label: "BGE Base EN v1.5 · BAAI (Workers AI)", provider: "cf" },
  { id: "@cf/huggingface/distilbert-sst-2-int8", label: "DistilBERT SST-2 INT8 · HuggingFace (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-2-7b-chat-int8", label: "Llama 2 7B Chat INT8 · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/meta/m2m100-1.2b", label: "M2M100 1.2B · Meta (Workers AI)", provider: "cf" },
  { id: "@cf/microsoft/resnet-50", label: "ResNet-50 · Microsoft (Workers AI)", provider: "cf" },
  { id: "@cf/openai/whisper", label: "Whisper Multilingual · OpenAI (Workers AI)", provider: "cf" },
  { id: "@cf/meta/llama-3.1-70b-instruct", label: "Llama 3.1 70B Instruct · Meta (Workers AI)", provider: "cf" },
  { id: "openai:gpt-4o-mini", label: "GPT-4o mini · OpenAI Gateway", provider: "openai", model: "gpt-4o-mini" },
  { id: "openai:gpt-4.1-mini", label: "GPT-4.1 mini · OpenAI Gateway", provider: "openai", model: "gpt-4.1-mini" },
  { id: "openai:gpt-4o", label: "GPT-4o · OpenAI Gateway", provider: "openai", model: "gpt-4o" }
];

const MODEL_LOOKUP = new Map(MODEL_CATALOG.map((model) => [model.id, model]));

// Many catalog entries are not text-chat models (TTS, ASR, embeddings, image
// generation, rerankers, classifiers, translation). Those error out in a chat
// UI, so the picker only offers chat/instruct-capable models.
const NON_CHAT_RE = /(whisper|aura-|melotts|\btts\b|nova-3|deepgram|embedding|bge-|plamo|m2m100|indictrans|smart-turn|reranker|llama-?guard|distilbert|bart-large|resnet|detr|flux|stable-diffusion|dreamshaper|sdxl|lucid-origin|phoenix|uform|llava|sqlcoder)/i;
function isChatModel(model) {
  return !NON_CHAT_RE.test(model.id);
}
const CHAT_CATALOG = MODEL_CATALOG.filter(isChatModel);
const DEFAULT_MODEL = CHAT_CATALOG[0].id;

const SYSTEM_PROMPT = [
  "You are nogoogle's research copilot — a concise, accurate assistant that helps people make sense of search results.",
  "When search context is provided, ground your answer in it and cite result titles or domains where relevant. When context is missing, say so and answer from general knowledge, noting any uncertainty.",
  "Be genuinely useful: summarize findings, compare sources, suggest better search terms or follow-up queries, and surface what the results agree or disagree on.",
  "Reply in clear plain text. A good default structure:",
  "Summary: one or two sentences answering the user's intent.",
  "Key points: a short bullet list of the most relevant findings (with the source title or domain).",
  "Suggested next searches: 2-4 refined queries that would deepen the research.",
  "Keep it focused and skip sections that don't apply. Decline requests to help with hacking, intrusion, or other illegal activity, and offer a lawful alternative instead."
].join("\n");

// Search backend defaults (overridable via wrangler vars).
const DEFAULT_SEARX_URL = "https://search.hwmnbn.me";
const DEFAULT_GOOGLE_CX = "66fccab6e71344d9f";
const MAX_RESULTS = 50;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return handleOptions();
    }

    if (url.pathname === "/api/ai") {
      if (request.method !== "POST") {
        return json({ error: "Method not allowed" }, { status: 405 });
      }
      return handleAi(request, env);
    }

    if (url.pathname === "/api/search") {
      if (request.method !== "GET") {
        return json({ error: "Method not allowed" }, { status: 405 });
      }
      return handleSearch(request, env);
    }

    if (url.pathname === "/" || url.pathname === "") {
      return new Response(renderPage(env), {
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "cache-control": "public, max-age=3600"
        }
      });
    }

    return new Response("Not found", { status: 404 });
  }
};

function renderPage(env) {
  const googleCx = (env && env.GOOGLE_CX) || DEFAULT_GOOGLE_CX;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>nogoogle · programmable search + AI</title>
  <meta name="description" content="nogoogle · Google Programmable Search Engine front-end with AI assistance" />
  <link rel="icon" type="image/png" href="/favicon.ico" />
  <style>
    :root {
      color-scheme: light dark;
      font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #050403;
      color: #f5f1e6;
      --accent-red: #a3212b;
      --accent-gold: #d4a24c;
      --surface: rgba(20, 14, 12, 0.86);
      --stroke: rgba(212, 162, 76, 0.24);
      --text-subtle: rgba(245, 241, 230, 0.7);
    }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: radial-gradient(circle at top, rgba(163, 33, 43, 0.22), transparent 55%), linear-gradient(160deg, #0c0907 0%, #1a0c0c 55%, #100b08 100%);
    }
    header {
      padding: 1.5rem 1rem 0;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      letter-spacing: -0.04em;
      color: var(--accent-gold);
    }
    main {
      flex: 1;
      display: grid;
      gap: 1.5rem;
      padding: 1.5rem 1rem 2rem;
      max-width: 860px;
      width: 100%;
      margin: 0 auto 3rem;
    }
    section.card {
      background: var(--surface);
      border: 1px solid var(--stroke);
      border-radius: 1rem;
      padding: 1.25rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(14px);
    }
    section.card h2 {
      margin-top: 0;
      font-size: clamp(1.2rem, 3vw, 1.45rem);
      color: var(--accent-gold);
    }
    .ai-form {
      display: grid;
      gap: 1rem;
      margin-top: 1rem;
    }
    textarea {
      width: 100%;
      min-height: 120px;
      padding: 1rem;
      font-size: 1rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(163, 33, 43, 0.4);
      background: rgba(12, 9, 8, 0.9);
      color: #fdf9ef;
      resize: vertical;
    }
    select {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(163, 33, 43, 0.4);
      background: rgba(12, 9, 8, 0.9);
      color: #fdf9ef;
      appearance: none;
    }
    textarea::placeholder {
      color: rgba(245, 241, 230, 0.45);
    }
    button {
      justify-self: flex-start;
      padding: 0.65rem 1.5rem;
      font-size: 1rem;
      border-radius: 999px;
      border: none;
      background: linear-gradient(130deg, var(--accent-red), var(--accent-gold));
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }
    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 10px 24px rgba(163, 33, 43, 0.35);
    }
    button:disabled {
      opacity: 0.6;
      cursor: progress;
    }
    .ai-output {
      margin-top: 1.25rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(212, 162, 76, 0.35);
      padding: 1rem;
      min-height: 96px;
      background: rgba(14, 10, 8, 0.88);
      white-space: pre-wrap;
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    footer {
      text-align: center;
      padding: 2rem 1rem 3rem;
      font-size: 0.85rem;
      color: var(--text-subtle);
    }
    .tagline {
      margin: 0.4rem 0 0;
      color: var(--text-subtle);
      font-size: 0.95rem;
    }
    .search-form {
      display: flex;
      gap: 0.6rem;
      margin-bottom: 0.75rem;
    }
    .search-form input[type="search"] {
      flex: 1;
      padding: 0.85rem 1.1rem;
      font-size: 1.05rem;
      border-radius: 999px;
      border: 1px solid rgba(212, 162, 76, 0.45);
      background: rgba(12, 9, 8, 0.92);
      color: #fdf9ef;
    }
    .search-form input[type="search"]::placeholder {
      color: rgba(245, 241, 230, 0.45);
    }
    .search-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 0.75rem;
      font-size: 0.85rem;
      color: var(--text-subtle);
    }
    .toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      cursor: pointer;
      user-select: none;
    }
    .toggle input {
      width: 1rem;
      height: 1rem;
      accent-color: var(--accent-gold);
    }
    .search-status {
      font-style: italic;
    }
    .results {
      display: grid;
      gap: 0.4rem;
    }
    .result {
      padding: 0.85rem 0;
      border-bottom: 1px solid rgba(212, 162, 76, 0.16);
    }
    .result:last-child {
      border-bottom: none;
    }
    .result a.result-title {
      color: var(--accent-gold);
      font-size: 1.08rem;
      font-weight: 700;
      text-decoration: none;
      line-height: 1.3;
    }
    .result a.result-title:hover {
      text-decoration: underline;
    }
    .result .result-url {
      display: block;
      color: rgba(212, 162, 76, 0.75);
      font-size: 0.8rem;
      margin: 0.15rem 0 0.35rem;
      word-break: break-all;
    }
    .result .result-snippet {
      margin: 0;
      color: rgba(245, 241, 230, 0.82);
      font-size: 0.92rem;
      line-height: 1.5;
    }
    .results-empty {
      color: var(--text-subtle);
      padding: 0.5rem 0;
    }
    .google-pane {
      margin-top: 1rem;
      border-top: 1px solid rgba(212, 162, 76, 0.2);
      padding-top: 1rem;
    }
    .result-favicon {
      width: 16px;
      height: 16px;
      vertical-align: -3px;
      margin-right: 8px;
      border-radius: 3px;
      background: rgba(245, 241, 230, 0.12);
    }
    .show-more {
      display: block;
      margin: 1rem auto 0;
    }
    .ai-output.rendered {
      white-space: normal;
    }
    .ai-output.rendered .ai-model-label {
      margin: 0 0 0.6rem;
      font-size: 0.8rem;
      color: var(--text-subtle);
    }
    .ai-output.rendered p {
      margin: 0 0 0.6rem;
    }
    .ai-output.rendered ul,
    .ai-output.rendered ol {
      margin: 0 0 0.6rem 1.2rem;
      padding: 0;
    }
    .ai-output.rendered li {
      margin: 0.15rem 0;
    }
    .ai-output.rendered h3,
    .ai-output.rendered h4,
    .ai-output.rendered h5,
    .ai-output.rendered h6 {
      color: var(--accent-gold);
      margin: 0.5rem 0 0.3rem;
      font-size: 1rem;
    }
    .ai-output.rendered a {
      color: var(--accent-gold);
    }
    .ai-output.rendered strong {
      color: #fff;
    }
    .ai-output.rendered code {
      background: rgba(0, 0, 0, 0.35);
      padding: 0 0.3rem;
      border-radius: 4px;
      font-size: 0.92em;
    }
    .gsc-control-cse {
      background: transparent;
      border: none;
    }
    .gcse-searchbox, .gcse-searchresults {
      max-width: 720px;
      margin: 0 auto;
    }
    .gsc-control-cse,
    .gsc-control-cse .gsc-control-wrapper-cse,
    .gcse-searchresults,
    .gcse-searchresults .gsc-wrapper {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
    .gsc-control-cse form.gsc-search-box, .gsc-control-cse .gsc-search-box-tools .gsc-search-box .gsc-input {
      margin: 0;
    }
    .gsc-input-box {
      border-radius: 999px !important;
      border: 1px solid rgba(212, 162, 76, 0.45) !important;
      background: rgba(245, 241, 230, 0.92) !important;
      padding: 2px 12px !important;
      box-shadow: none !important;
    }
    input.gsc-input.contrast-on-light {
      color: #1a0908 !important;
      font-weight: 600;
      text-shadow: none;
    }
    input.gsc-input.contrast-on-light::placeholder {
      color: rgba(26, 9, 8, 0.58) !important;
    }
    input.gsc-input.contrast-on-dark {
      color: #fdf9ef !important;
    }
    input.gsc-input.contrast-on-dark::placeholder {
      color: rgba(253, 249, 239, 0.6) !important;
    }
    textarea[data-dynamic-contrast="true"].contrast-on-light {
      color: #0f0a08 !important;
    }
    textarea[data-dynamic-contrast="true"].contrast-on-light::placeholder {
      color: rgba(15, 10, 8, 0.5);
    }
    textarea[data-dynamic-contrast="true"].contrast-on-dark {
      color: #fdf9ef !important;
    }
    textarea[data-dynamic-contrast="true"].contrast-on-dark::placeholder {
      color: rgba(253, 249, 239, 0.55);
    }
    .gsc-search-button-v2 svg, .gsc-search-button-v2 {
      background: linear-gradient(130deg, var(--accent-red), var(--accent-gold)) !important;
      border-radius: 999px !important;
      border: none !important;
    }
    .gsc-search-button-v2:hover {
      filter: brightness(1.05);
    }
    .gsc-result-info {
      display: none;
    }
    .gsc-above-wrapper-area {
      margin-bottom: 0.25rem;
      color: var(--text-subtle);
      font-size: 0.8rem;
    }
    .gsc-webResult.gsc-result {
      margin: 0.75rem 0 !important;
      padding: 0.75rem 0 !important;
      border-bottom: 1px solid rgba(212, 162, 76, 0.18) !important;
    }
    .gsc-webResult.gsc-result:last-child {
      border-bottom: none !important;
    }
    .gsc-webResult.gsc-result .gs-title {
      color: #7a1d23 !important;
      font-weight: 700;
    }
    .gsc-webResult.gsc-result .gs-snippet,
    .gsc-table-result .gs-snippet,
    .gsc-thumbnail-inside .gs-bidi-start-align {
      color: #21100a !important;
      line-height: 1.5;
    }
    .gsc-cursor-box {
      text-align: center;
    }
    .gsc-cursor-page {
      color: rgba(245, 241, 230, 0.65) !important;
      border-radius: 50%;
      border: 1px solid transparent;
      margin: 0 0.25rem;
      padding: 0.35rem 0.6rem;
    }
    .gsc-cursor-page.gsc-cursor-current-page {
      border-color: rgba(212, 162, 76, 0.6);
      color: var(--accent-gold) !important;
    }
    .gcse-searchresults .gsc-loading-resultsRoot, .gsc-results-wrapper-overlay {
      background: transparent !important;
    }
    .gs-webResult .gs-visibleUrl-long {
      display: inline !important;
      color: #501f20 !important;
      font-weight: 600;
    }
    .gs-webResult .gs-visibleUrl-short,
    .gs-webResult .gs-breadcrumb {
      display: none !important;
    }
    .gs-webResult .gsc-url-top,
    .gs-webResult .gsc-url-bottom {
      display: block !important;
    }
    .gssb_c,
    .gssb_e,
    .gsc-completion-container {
      background: rgba(253, 246, 234, 0.98) !important;
      border-color: rgba(122, 29, 35, 0.35) !important;
    }
    .gssb_a,
    .gssb_a span,
    .gssb_a b,
    .gsc-completion-title,
    .gsc-completion-snippet {
      color: #1a0908 !important;
    }
    .gssb_a:hover,
    .gssb_a.gssb_f,
    .gsc-completion-selected {
      background: rgba(215, 180, 156, 0.35) !important;
      color: #3f1415 !important;
    }
  </style>
  <!-- Google Programmable Search loads on demand only when the Google toggle is enabled. -->
</head>
<body>
  <header>
    <h1>nogoogle</h1>
    <p class="tagline">metasearch without the tracking · Google off by default</p>
  </header>
  <main>
    <section class="card" aria-label="Search">
      <form class="search-form" id="search-form" role="search">
        <label for="search-input" class="sr-only">Search query</label>
        <input id="search-input" name="q" type="search" placeholder="Search the web…" autocomplete="off" autofocus />
        <button type="submit" id="search-button">Search</button>
      </form>
      <div class="search-toolbar">
        <label class="toggle">
          <input type="checkbox" id="google-toggle" />
          <span>Include Google results</span>
        </label>
        <span class="search-status" id="search-status"></span>
      </div>
      <div class="results" id="results" aria-live="polite"></div>
      <button type="button" class="show-more" id="show-more" hidden></button>
      <div class="google-pane" id="google-pane" hidden>
        <div class="gcse-search"></div>
      </div>
    </section>
    <section class="card" aria-label="AI assistant">
      <h2>Ask nogoogle AI</h2>
      <p>Ask about your current search, or anything else — the assistant grounds its answer in the results above when available.</p>
      <form class="ai-form" id="ai-form">
        <label for="ai-query" class="sr-only">Prompt</label>
        <textarea id="ai-query" name="query" placeholder="Summarize the top results for..." data-dynamic-contrast="true" class="contrast-on-dark" required></textarea>
        <label for="ai-model" class="sr-only">AI model</label>
        <select id="ai-model" name="model">
          ${buildModelOptions()}
        </select>
        <button type="submit">Ask AI</button>
      </form>
      <div class="ai-output" id="ai-output">Responses will land here.</div>
    </section>
  </main>
  <footer>
    Powered by Google Programmable Search Engine · Built for Cloudflare Workers · AI by Cloudflare Workers AI
  </footer>
  <script>
    (function() {
      const searchForm = document.getElementById('search-form');
      const searchInput = document.getElementById('search-input');
      const searchButton = document.getElementById('search-button');
      const searchStatus = document.getElementById('search-status');
      const resultsEl = document.getElementById('results');
      const googleToggle = document.getElementById('google-toggle');
      const googlePane = document.getElementById('google-pane');

      const aiForm = document.getElementById('ai-form');
      const aiInput = document.getElementById('ai-query');
      const aiOutput = document.getElementById('ai-output');
      const aiButton = aiForm.querySelector('button');
      const modelSelect = document.getElementById('ai-model');
      const showMoreBtn = document.getElementById('show-more');

      const PAGE_SIZE = 12;
      let lastResults = [];
      let lastQuery = '';
      let shown = 0;
      let cseLoaded = false;

      function escapeText(value) {
        const span = document.createElement('span');
        span.textContent = value == null ? '' : String(value);
        return span.innerHTML;
      }

      function hostOf(url) {
        try {
          return new URL(url).hostname;
        } catch (e) {
          return '';
        }
      }

      function resultHtml(r) {
        const safeUrl = escapeText(r.url);
        const safeTitle = escapeText(r.title || r.url);
        const safeSnippet = escapeText(r.snippet || '');
        const host = hostOf(r.url);
        const favicon = host
          ? '<img class="result-favicon" alt="" loading="lazy" src="https://icons.duckduckgo.com/ip3/' + encodeURIComponent(host) + '.ico" />'
          : '';
        return '<div class="result">'
          + '<a class="result-title" href="' + safeUrl + '" target="_blank" rel="noopener noreferrer">' + favicon + safeTitle + '</a>'
          + '<span class="result-url">' + safeUrl + '</span>'
          + (safeSnippet ? '<p class="result-snippet">' + safeSnippet + '</p>' : '')
          + '</div>';
      }

      function renderResults() {
        if (!lastResults.length) {
          resultsEl.innerHTML = '<p class="results-empty">No results found.</p>';
          showMoreBtn.hidden = true;
          return;
        }
        resultsEl.innerHTML = lastResults.slice(0, shown).map(resultHtml).join('');
        const remaining = lastResults.length - shown;
        showMoreBtn.hidden = remaining <= 0;
        if (remaining > 0) {
          showMoreBtn.textContent = 'Show more results (' + remaining + ' more)';
        }
      }

      showMoreBtn.addEventListener('click', () => {
        shown = Math.min(shown + PAGE_SIZE, lastResults.length);
        renderResults();
      });

      // Minimal, XSS-safe markdown renderer for AI answers (escapes first).
      function inlineMd(text) {
        let s = escapeText(text);
        s = s.replace(/\\*\\*([^*]+)\\*\\*/g, '<strong>$1</strong>');
        s = s.replace(/(^|[^*])\\*([^*]+)\\*(?!\\*)/g, '$1<em>$2</em>');
        s = s.replace(/\\[([^\\]]+)\\]\\((https?:[^)\\s]+)\\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        s = s.replace(/(^|[\\s(])((?:https?:\\/\\/)[^\\s<)]+)/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>');
        return s;
      }

      function renderMarkdown(text) {
        const lines = String(text == null ? '' : text).replace(/\\r/g, '').split('\\n');
        let html = '';
        let ulOpen = false;
        let olOpen = false;
        const closeLists = () => {
          if (ulOpen) { html += '</ul>'; ulOpen = false; }
          if (olOpen) { html += '</ol>'; olOpen = false; }
        };
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) { closeLists(); continue; }
          let m;
          if ((m = /^(#{1,4})\\s+(.*)$/.exec(line))) {
            closeLists();
            const lvl = Math.min(m[1].length + 2, 6);
            html += '<h' + lvl + '>' + inlineMd(m[2]) + '</h' + lvl + '>';
          } else if ((m = /^[-*]\\s+(.*)$/.exec(line))) {
            if (!ulOpen) { closeLists(); html += '<ul>'; ulOpen = true; }
            html += '<li>' + inlineMd(m[1]) + '</li>';
          } else if ((m = /^\\d+[.)]\\s+(.*)$/.exec(line))) {
            if (!olOpen) { closeLists(); html += '<ol>'; olOpen = true; }
            html += '<li>' + inlineMd(m[1]) + '</li>';
          } else {
            closeLists();
            html += '<p>' + inlineMd(line) + '</p>';
          }
        }
        closeLists();
        return html;
      }

      async function runSearch(query) {
        searchStatus.textContent = 'Searching…';
        searchButton.disabled = true;
        try {
          const response = await fetch('/api/search?q=' + encodeURIComponent(query));
          if (!response.ok) {
            const err = await response.json().catch(() => ({ error: 'Search failed' }));
            throw new Error(err.error || 'Search failed');
          }
          const data = await response.json();
          lastResults = Array.isArray(data.results) ? data.results : [];
          lastQuery = query;
          shown = Math.min(PAGE_SIZE, lastResults.length);
          renderResults();
          searchStatus.textContent = lastResults.length
            ? lastResults.length + ' results' + (data.source ? ' · ' + data.source : '')
            : 'No results';
        } catch (error) {
          lastResults = [];
          showMoreBtn.hidden = true;
          resultsEl.innerHTML = '<p class="results-empty">Something went wrong: ' + escapeText(error.message) + '</p>';
          searchStatus.textContent = '';
        } finally {
          searchButton.disabled = false;
        }
      }

      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (!query) {
          return;
        }
        runSearch(query);
        if (googleToggle.checked) {
          syncGoogle(query);
        }
      });

      function loadCse() {
        if (cseLoaded) {
          return;
        }
        cseLoaded = true;
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://cse.google.com/cse.js?cx=' + '${googleCx}';
        document.head.appendChild(script);
      }

      function syncGoogle(query) {
        if (!query) {
          return;
        }
        try {
          const element = window.google
            && google.search
            && google.search.cse
            && google.search.cse.element
            && google.search.cse.element.getElement('searchresults-only0');
          if (element) {
            element.execute(query);
            return;
          }
        } catch (e) { /* CSE not ready yet */ }
        const tryFill = (attempt) => {
          const input = googlePane.querySelector('input.gsc-input');
          if (input) {
            input.value = query;
          } else if (attempt < 12) {
            setTimeout(() => tryFill(attempt + 1), 250);
          }
        };
        tryFill(0);
      }

      googleToggle.addEventListener('change', () => {
        if (googleToggle.checked) {
          googlePane.hidden = false;
          loadCse();
          syncGoogle(searchInput.value.trim() || lastQuery);
        } else {
          googlePane.hidden = true;
        }
      });

      function collectSearchContext() {
        return {
          searchQuery: lastQuery || searchInput.value.trim(),
          results: lastResults.slice(0, 5).map((r) => {
            const snippet = r.snippet || '';
            return {
              title: r.title || '',
              url: r.url || '',
              snippet: snippet.length > 280 ? snippet.slice(0, 277) + '...' : snippet
            };
          })
        };
      }

      aiForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = aiInput.value.trim();
        if (!query) {
          aiOutput.classList.remove('rendered');
          aiOutput.textContent = 'Please enter a prompt before asking the AI assistant.';
          return;
        }
        aiButton.disabled = true;
        aiOutput.classList.remove('rendered');
        aiOutput.textContent = 'Thinking…';
        try {
          const response = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
              query,
              model: modelSelect && modelSelect.value ? modelSelect.value : '${DEFAULT_MODEL}',
              context: collectSearchContext()
            })
          });
          if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(error.error || 'AI request failed');
          }
          const data = await response.json();
          const selectedLabel = modelSelect && modelSelect.selectedOptions && modelSelect.selectedOptions[0]
            ? modelSelect.selectedOptions[0].text
            : '';
          const answer = data.answer || 'No response returned by the AI assistant.';
          aiOutput.classList.add('rendered');
          aiOutput.innerHTML =
            (selectedLabel ? '<p class="ai-model-label">' + escapeText(selectedLabel) + '</p>' : '')
            + renderMarkdown(answer);
        } catch (error) {
          aiOutput.classList.remove('rendered');
          aiOutput.textContent = 'Something went wrong: ' + error.message;
        } finally {
          aiButton.disabled = false;
        }
      });
    })();
  </script>
</body>
</html>`;
}

function buildModelOptions() {
  return CHAT_CATALOG.map((model) => {
    const selected = model.id === DEFAULT_MODEL ? " selected" : "";
    const safeLabel = escapeHtml(model.label);
    const safeValue = escapeHtml(model.id);
    return `<option value="${safeValue}"${selected}>${safeLabel}</option>`;
  }).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

function formatContext(raw) {
  if (!raw) {
    return "";
  }

  if (typeof raw === "string") {
    return raw.trim().slice(0, 2000);
  }

  const sections = [];

  if (typeof raw.searchQuery === "string" && raw.searchQuery.trim()) {
    sections.push(`Active search query: ${raw.searchQuery.trim()}`);
  }

  if (Array.isArray(raw.results) && raw.results.length) {
    const topResults = raw.results
      .slice(0, 5)
      .map((entry, index) => {
        if (!entry || typeof entry !== "object") {
          return null;
        }
        const title = typeof entry.title === "string" ? entry.title.trim() : "";
        const url = typeof entry.url === "string" ? entry.url.trim() : "";
        const snippet = typeof entry.snippet === "string" ? entry.snippet.trim() : "";
        const parts = [title, url, snippet].filter(Boolean);
        if (!parts.length) {
          return null;
        }
        return `${index + 1}. ${parts.join(" — ")}`;
      })
      .filter(Boolean);

    if (topResults.length) {
      sections.push(["Top results:", ...topResults].join("\n").slice(0, 2000));
    }
  }

  if (typeof raw.refinements === "string" && raw.refinements.trim()) {
    sections.push(`Applied refinements: ${raw.refinements.trim()}`);
  }

  const summary = sections.join("\n\n").trim();
  return summary.slice(0, 2000);
}

function buildUserPrompt(query, contextText) {
  const base = (query || "").trim();
  if (!contextText) {
    return base;
  }
  return `${base}\n\n[Search Context]\n${contextText}`.trim();
}

function decodeEntities(value) {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function cleanText(value) {
  return decodeEntities(String(value || "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

// Parse the SearXNG (search.hwmnbn.me) results page into structured results.
// The instance uses a customized template: <article class="result-card">.
function parseSearxResults(htmlText) {
  const results = [];
  const seen = new Set();
  const cardRe = /<article class="result-card[^"]*">([\s\S]*?)<\/article>/g;
  let match;
  while ((match = cardRe.exec(htmlText))) {
    const block = match[1];
    const anchor = /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/.exec(block);
    if (!anchor) {
      continue;
    }
    const url = decodeEntities(anchor[1]);
    if (!/^https?:\/\//i.test(url) || seen.has(url)) {
      continue;
    }
    seen.add(url);
    const snippetMatch = /<p class="result-content">([\s\S]*?)<\/p>/.exec(block);
    results.push({
      title: cleanText(anchor[2]) || url,
      url,
      snippet: snippetMatch ? cleanText(snippetMatch[1]) : ""
    });
    if (results.length >= MAX_RESULTS) {
      break;
    }
  }
  return results;
}

async function fetchSearx(query, env, pageno) {
  const base = (env.SEARX_URL || DEFAULT_SEARX_URL).replace(/\/$/, "");
  const endpoint = `${base}/search?q=${encodeURIComponent(query)}${pageno > 1 ? `&pageno=${pageno}` : ""}`;
  const response = await fetch(endpoint, {
    headers: {
      "User-Agent": "nogoogle/1.0 (+https://nogoogle.hwmnbn.me)",
      Accept: "text/html"
    }
  });
  if (!response.ok) {
    throw new Error(`Search backend returned ${response.status}`);
  }
  return response.text();
}

async function handleSearch(request, env) {
  const url = new URL(request.url);
  const query = (url.searchParams.get("q") || "").trim();
  if (!query) {
    return json({ error: "Missing query" }, { status: 400 });
  }
  const pageno = Math.max(1, parseInt(url.searchParams.get("pageno") || "1", 10) || 1);

  try {
    const htmlText = await fetchSearx(query, env, pageno);
    const results = parseSearxResults(htmlText);
    return json(
      { query, source: "searxng", count: results.length, results },
      { headers: { "cache-control": "public, max-age=120" } }
    );
  } catch (error) {
    return json({ error: error.message || "Search failed" }, { status: 502 });
  }
}

async function handleAi(request, env) {
  let payload;
  try {
    payload = await request.json();
  } catch (error) {
    return json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const query = typeof payload?.query === "string" ? payload.query.trim() : "";
  if (!query) {
    return json({ error: "Missing query" }, { status: 400 });
  }

  const requestedModel = typeof payload?.model === "string" ? payload.model : DEFAULT_MODEL;
  const modelEntry = MODEL_LOOKUP.get(requestedModel) || MODEL_LOOKUP.get(DEFAULT_MODEL);
  if (!modelEntry) {
    return json({ error: "Unsupported model selection" }, { status: 400 });
  }

  const contextText = formatContext(payload?.context);
  const userPrompt = buildUserPrompt(query, contextText);

  const messages = [
    {
      role: "user",
      content: userPrompt
    }
  ];

  messages.unshift({ role: "system", content: SYSTEM_PROMPT });

  try {
    const { answer, raw } = await runModel(modelEntry, messages, env);
    return json({
      answer,
      model: modelEntry.id,
      provider: modelEntry.provider,
      context: contextText || undefined,
      raw
    });
  } catch (error) {
    return json({ error: error.message || "AI request failed" }, { status: 502 });
  }
}

async function runModel(modelEntry, messages, env) {
  if (modelEntry.provider === "cf") {
    return runCfModel(modelEntry, messages, env);
  }

  if (modelEntry.provider === "openai") {
    return runOpenAi(modelEntry, messages, env);
  }

  throw new Error(`Unknown AI provider: ${modelEntry.provider}`);
}

async function runCfModel(modelEntry, messages, env) {
  const schema = typeof modelEntry?.schema === "string" ? modelEntry.schema : "chat";
  let payload;

  if (schema === "responses") {
    const { instructions, input } = buildResponsesPayload(messages);
    payload = instructions ? { instructions, input } : { input };
  } else {
    payload = { messages };
  }

  const aiResponse = await env.AI.run(modelEntry.id, payload);
  const answer = extractWorkerAiAnswer(aiResponse);
  return { answer, raw: aiResponse };
}

async function runOpenAi(modelEntry, messages, env) {
  const targetModel = modelEntry.model || modelEntry.id;
  if (!targetModel) {
    throw new Error("OpenAI model mapping missing");
  }

  const gatewayKey = env.AI_GATEWAY_KEY;
  const accountId = env.ACCOUNT_ID;
  const baseOverride = env.AI_GATEWAY_BASE;
  const gatewayName = env.AI_GATEWAY_NAME || "skygate";
  let endpoint = null;
  const headers = {
    "content-type": "application/json"
  };

  if (gatewayKey) {
    if (baseOverride) {
      endpoint = `${baseOverride.replace(/\/$/, "")}/chat/completions`;
    } else if (accountId && gatewayName) {
      endpoint = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayName}/openai/chat/completions`;
    } else {
      throw new Error("AI Gateway configuration incomplete. Set AI_GATEWAY_BASE or both ACCOUNT_ID and AI_GATEWAY_NAME.");
    }
    headers.Authorization = `Bearer ${gatewayKey}`;
  } else if (env.OPENAI_API_KEY) {
    endpoint = "https://api.openai.com/v1/chat/completions";
    headers.Authorization = `Bearer ${env.OPENAI_API_KEY}`;
  } else {
    throw new Error("OpenAI credentials not configured. Provide AI_GATEWAY_KEY or OPENAI_API_KEY.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: targetModel,
      messages,
      temperature: 0.2
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI request failed (${response.status}): ${detail.slice(0, 240)}`);
  }

  const data = await response.json();
  const answer = data?.choices?.[0]?.message?.content || "";
  return { answer, raw: data };
}

function buildResponsesPayload(messages) {
  if (!Array.isArray(messages)) {
    return { input: [] };
  }

  let instructions;
  const dialogue = [];

  for (const entry of messages) {
    if (!entry || typeof entry !== "object") {
      continue;
    }

    const role = typeof entry.role === "string" ? entry.role : "user";
    const content = typeof entry.content === "string" ? entry.content : "";

    if (role === "system" && content && instructions === undefined) {
      instructions = content;
      continue;
    }

    if (!content) {
      continue;
    }

    dialogue.push({ role, content });
  }

  if (!dialogue.length) {
    dialogue.push({ role: "user", content: "" });
  }

  return {
    instructions,
    input: dialogue
  };
}

function extractWorkerAiAnswer(aiResponse) {
  if (!aiResponse) {
    return "";
  }

  if (typeof aiResponse === "string") {
    return aiResponse;
  }

  const directCandidates = [
    aiResponse.response,
    aiResponse.result,
    aiResponse.output,
    aiResponse.output_text,
    aiResponse?.response?.output,
    aiResponse?.response?.output_text
  ];

  for (const candidate of directCandidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }

  if (Array.isArray(aiResponse.outputs)) {
    for (const output of aiResponse.outputs) {
      const text = normalizeWorkerAiContent(output);
      if (text) {
        return text;
      }
    }
  }

  const fallback = normalizeWorkerAiContent(aiResponse.content) || normalizeWorkerAiContent(aiResponse.response?.content);
  return fallback || "";
}

function normalizeWorkerAiContent(content) {
  if (!content) {
    return "";
  }

  if (typeof content === "string") {
    return content.trim();
  }

  if (typeof content.output_text === "string") {
    return content.output_text.trim();
  }

  if (Array.isArray(content)) {
    const combined = content
      .map((part) => normalizeWorkerAiContent(part))
      .filter(Boolean)
      .join("\n")
      .trim();
    return combined;
  }

  if (Array.isArray(content?.content)) {
    const combined = content.content
      .map((part) => normalizeWorkerAiContent(part))
      .filter(Boolean)
      .join("\n")
      .trim();
    return combined;
  }

  if (typeof content.text === "string") {
    return content.text.trim();
  }

  if (typeof content.output === "string") {
    return content.output.trim();
  }

  return "";
}

function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}

function corsHeaders() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type"
  };
}

function json(data, init = {}) {
  const headers = {
    "content-type": "application/json; charset=UTF-8",
    ...corsHeaders(),
    ...init.headers
  };

  return new Response(JSON.stringify(data), { ...init, headers });
}
