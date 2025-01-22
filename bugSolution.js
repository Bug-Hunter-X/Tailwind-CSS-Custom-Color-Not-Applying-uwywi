```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Ensure correct paths
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Double-check color definition
      },
    },
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<div class="bg-custom-blue p-4">
  <!-- Content will now have the custom blue background -->
</div>
```

**Important:** After making changes to `tailwind.config.js`, restart your development server (e.g., `npm run dev`) to apply the changes.  Also, verify that there are no typos in `bg-custom-blue` in your HTML.