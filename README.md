
  # Homepage Design for Charity

  This is a code bundle for Homepage Design for Charity. The original project is available at https://www.figma.com/design/OHo9k1yzNM5QW0VK48uEGS/Homepage-Design-for-Charity.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Basic Authentication

  The site is protected with Basic Authentication (configured in `middleware.js`).

  **⚠️ SECURITY IMPORTANT**:

  Set these environment variables in your Vercel project for production:
  - `BASIC_AUTH_USER` - Your desired username
  - `BASIC_AUTH_PASSWORD` - Your secure password

  **Never commit actual credentials to this repository.**
  Default credentials exist in `middleware.js` for local development only.
