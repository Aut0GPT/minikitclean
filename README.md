# Clean Mini App Template

A clean, production-ready starter template for building [World Mini Apps](https://docs.worldcoin.org/mini-apps) with wallet authentication and bottom navigation.

## Features

- ✅ **Wallet Authentication** - Sign in with World wallet using MiniKit
- ✅ **Bottom Navigation** - Three pages with tab navigation (Home, Page 2, Page 3)
- ✅ **Protected Routes** - Automatic redirect to sign-in for unauthenticated users
- ✅ **World UI Kit** - Clean, consistent design using @worldcoin/mini-apps-ui-kit-react
- ✅ **TypeScript** - Full type safety
- ✅ **Next.js 15** - Latest App Router with React 19
- ✅ **Tailwind CSS** - Utility-first styling

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Sign-in page (unauthenticated)
│   ├── (protected)/                # Protected routes (requires auth)
│   │   ├── layout.tsx              # Protected layout with navigation
│   │   ├── home/page.tsx           # Home page
│   │   ├── page2/page.tsx          # Page 2
│   │   └── page3/page.tsx          # Page 3
│   └── layout.tsx                  # Root layout with providers
├── components/
│   ├── Navigation/                 # Bottom tab navigation
│   ├── PageLayout/                 # Reusable page layout components
│   └── AuthButton/                 # Wallet authentication button
├── auth/                           # Authentication logic
└── providers/                      # React context providers
```

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment

```bash
cp .env.sample .env.local
```

Edit `.env.local` and follow the instructions:
- Set up your app at [developer.worldcoin.org](https://developer.worldcoin.org)
- Generate auth secret: `npx auth secret`
- Configure `APP_ID` from World Developer Portal

### 3. Development Setup

```bash
# Start dev server
pnpm dev

# In another terminal, start ngrok
ngrok http 3000
```

### 4. Configure Your App

1. Add your ngrok URL to `allowedDevOrigins` in `next.config.ts`
2. Update `AUTH_URL` in `.env.local` to your ngrok URL
3. Update your app URL in the World Developer Portal

### 5. Open in World App

Scan the QR code or open your mini app link in World App to test!

## Customization Guide

### Update Company Name

Edit `/src/app/(protected)/home/page.tsx` line 44:
```tsx
<h2 className="text-2xl font-semibold text-gray-700">
  Put your company name here  {/* Change this! */}
</h2>
```

### Add More Pages

1. Create a new directory: `src/app/(protected)/your-page/`
2. Add `page.tsx` following the pattern in existing pages
3. Update `src/components/Navigation/index.tsx` to add your tab

### Customize Colors

The template uses Tailwind CSS. Update colors in component classes:
- Home: Blue/Purple gradient
- Page 2: Green/Teal gradient
- Page 3: Orange/Pink gradient

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Authentication**: [MiniKit](https://github.com/worldcoin/minikit-js) + [NextAuth.js](https://authjs.dev/)
- **UI Components**: [@worldcoin/mini-apps-ui-kit-react](https://github.com/worldcoin/mini-apps-ui-kit)
- **Icons**: [iconoir-react](https://iconoir.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **TypeScript**: Full type safety throughout

## Authentication Flow

1. User lands on sign-in page (`/`)
2. Clicks "Login with Wallet" button
3. MiniKit wallet auth authenticates with World App
4. Session created via NextAuth
5. Redirected to `/home`
6. Bottom navigation enables switching between protected pages

## Development Tools

### Eruda Console

[Eruda](https://github.com/liriliri/eruda) provides in-browser console for debugging mini apps. It's enabled by default in development and should be disabled in production.

## Deployment

Build for production:

```bash
pnpm build
pnpm start
```

Deploy to your favorite hosting platform (Vercel, Railway, etc.) and update your World Developer Portal with the production URL.

## Learn More

- [World Mini Apps Documentation](https://docs.worldcoin.org/mini-apps)
- [MiniKit SDK](https://github.com/worldcoin/minikit-js)
- [Design Guidelines](https://docs.worldcoin.org/mini-apps/design/app-guidelines)
- [World Developer Portal](https://developer.worldcoin.org)

## License

MIT
