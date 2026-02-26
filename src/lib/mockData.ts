export interface UpdateItem {
  id: number;
  source_name: string;
  source_type: string;
  title: string;
  url: string;
  published_at: string;
  short_description: string;
  tags: string[];
  internal_score: number;
}

export const MOCK_UPDATES: UpdateItem[] = [
  {
    id: 1,
    source_name: "Anthropic",
    source_type: "Model Provider",
    title: "Claude 3.5 Sonnet: New capabilities and expanded context window",
    url: "https://anthropic.com",
    published_at: "2024-06-20T14:00:00Z",
    short_description: "The latest model brings significant improvements in reasoning, coding, and instruction following, while maintaining speed.",
    tags: ["LLM", "Claude", "Release"],
    internal_score: 98
  },
  {
    id: 2,
    source_name: "LangChain",
    source_type: "Agent Framework",
    title: "LangGraph v0.1: Production-ready multi-agent orchestration",
    url: "https://langchain.com",
    published_at: "2024-06-18T09:30:00Z",
    short_description: "A new framework for building stateful, multi-actor applications with LLMs, built on top of LangChain.",
    tags: ["Agents", "Orchestration", "Framework"],
    internal_score: 92
  },
  {
    id: 3,
    source_name: "OpenAI",
    source_type: "Model Provider",
    title: "GPT-4o mini: Cost-efficient intelligence for everyday tasks",
    url: "https://openai.com",
    published_at: "2024-07-18T10:00:00Z",
    short_description: "Our most cost-efficient small model, replacing GPT-3.5 Turbo with improved performance across text and vision.",
    tags: ["LLM", "GPT-4", "Efficiency"],
    internal_score: 95
  },
  {
    id: 4,
    source_name: "Vercel",
    source_type: "Infrastructure",
    title: "AI SDK 3.2: Streaming UI and Tool Calling improvements",
    url: "https://vercel.com",
    published_at: "2024-07-10T16:15:00Z",
    short_description: "Enhanced support for generative UI components and more robust tool calling across different model providers.",
    tags: ["SDK", "UI", "Tooling"],
    internal_score: 88
  },
  {
    id: 5,
    source_name: "Pinecone",
    source_type: "Vector DB",
    title: "Serverless architecture now generally available",
    url: "https://pinecone.io",
    published_at: "2024-06-05T11:00:00Z",
    short_description: "Pay only for what you use with our new serverless architecture, reducing costs for variable workloads by up to 50x.",
    tags: ["Database", "Serverless", "Vector"],
    internal_score: 85
  },
  {
    id: 6,
    source_name: "Hugging Face",
    source_type: "Ecosystem",
    title: "Transformers v4.42: Native support for Gemma 2",
    url: "https://huggingface.co",
    published_at: "2024-06-28T13:45:00Z",
    short_description: "The latest release includes optimized inference for Google's new Gemma 2 models and improved quantization.",
    tags: ["Open Source", "Models", "Library"],
    internal_score: 89
  },
  {
    id: 7,
    source_name: "LlamaIndex",
    source_type: "Agent Framework",
    title: "Workflows: A new way to build event-driven AI applications",
    url: "https://llamaindex.ai",
    published_at: "2024-07-15T08:00:00Z",
    short_description: "Introducing Workflows, a flexible, event-driven architecture for building complex RAG and agentic applications.",
    tags: ["RAG", "Agents", "Architecture"],
    internal_score: 91
  },
  {
    id: 8,
    source_name: "Mistral AI",
    source_type: "Model Provider",
    title: "Codestral: Our first model designed for code generation",
    url: "https://mistral.ai",
    published_at: "2024-05-29T15:30:00Z",
    short_description: "An open-weight model specifically trained on 80+ programming languages for code generation and completion tasks.",
    tags: ["LLM", "Coding", "Open Weights"],
    internal_score: 94
  },
  {
    id: 9,
    source_name: "Supabase",
    source_type: "Infrastructure",
    title: "pgvector 0.7.0 support and improved index build times",
    url: "https://supabase.com",
    published_at: "2024-06-12T10:20:00Z",
    short_description: "Faster vector index creation and improved recall with the latest pgvector extension update on our platform.",
    tags: ["Database", "Vector", "PostgreSQL"],
    internal_score: 82
  },
  {
    id: 10,
    source_name: "Cohere",
    source_type: "Model Provider",
    title: "Command R+: An open weights model for enterprise RAG",
    url: "https://cohere.com",
    published_at: "2024-04-04T12:00:00Z",
    short_description: "A state-of-the-art RAG-optimized model designed to tackle enterprise-grade workloads with advanced tool use.",
    tags: ["LLM", "RAG", "Enterprise"],
    internal_score: 93
  }
];
