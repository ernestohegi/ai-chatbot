# AI Recipe Chatbot with DeepSeek

A Next.js-based AI chatbot that provides recipe suggestions using DeepSeek's language models. The chatbot acts as an experienced chef with 20 years of global culinary experience, offering creative and safe recipe ideas based on your available ingredients.

## Features

- 🤖 AI-powered recipe suggestions using DeepSeek models
- 🍳 Specialized in food recipes with culinary expertise
- ⚡ Real-time streaming responses
- 🎨 Clean, responsive UI built with Tailwind CSS
- 📱 Markdown rendering for formatted recipe responses
- 🛡️ Safe and healthy recipe recommendations

## Supported Models

This application currently supports the following DeepSeek models:

- **DeepSeek Chat** (`deepseek-chat`) - The primary model used for recipe generation

## Prerequisites

Before running this application, ensure you have:

- Node.js 18+ installed
- A DeepSeek API key (get one from [DeepSeek's platform](https://platform.deepseek.com/))
- pnpm package manager (recommended) or npm/yarn

## Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd ai-chatbot
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your DeepSeek API key:

   ```
   DEEPSEEK_API_KEY=your_actual_deepseek_api_key_here
   ```

## Running the Application

### Development Mode

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

```bash
pnpm build
pnpm start
# or
npm run build
npm start
# or
yarn build
yarn start
```

## How to Use

1. **Start the application** using the commands above
2. **Open your browser** to `http://localhost:3000`
3. **Enter your ingredients** in the chat input field
4. **Get recipe suggestions** - The AI chef will provide creative recipe ideas based on your ingredients

### Example Usage:

- Input: "I have chicken, rice, and vegetables"
- Output: The AI will suggest recipes like chicken stir-fry with rice and vegetables, including cooking instructions and tips

## Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **AI SDK**: Vercel AI SDK with DeepSeek integration
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: React Markdown for recipe formatting
- **State Management**: React Query for efficient data handling

## API Configuration

The chatbot uses a system prompt that configures the AI to:

- Use British English
- Respond politely and concisely
- Specialize exclusively in food recipes
- Provide safe and healthy cooking recommendations
- Act as an experienced chef with global culinary knowledge

## Environment Variables

| Variable           | Description                            | Required |
| ------------------ | -------------------------------------- | -------- |
| `DEEPSEEK_API_KEY` | Your DeepSeek API key for model access | Yes      |

## Project Structure

```
ai-chatbot/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts          # API endpoint for chat
│   │   ├── components/
│   │   │   ├── DeepSeekChat.tsx      # Main chat component
│   │   │   └── MemoisedMarkdown.tsx  # Markdown renderer
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home page
│   │   └── globals.css               # Global styles
├── .env.example                      # Environment template
├── package.json                      # Dependencies
└── README.md                         # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions:

1. Check the [DeepSeek documentation](https://platform.deepseek.com/docs) for API-related issues
2. Review the [Next.js documentation](https://nextjs.org/docs) for framework questions
3. Open an issue in this repository for application-specific problems

## Acknowledgments

- [DeepSeek](https://www.deepseek.com/) for providing the AI models
- [Vercel](https://vercel.com/) for the AI SDK and Next.js framework
- The open-source community for various libraries and tools used
