```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Or adjust based on your project structure
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Example custom color
      },
    },
  },
  plugins: [],
};
```

```html
<div class="bg-custom-blue p-4">
  <!-- Content here -->
</div>
```