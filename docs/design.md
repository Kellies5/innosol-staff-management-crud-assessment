# System Color Scheme

## Color Variables

The staff management application uses a modern, professional color palette based on the Oxford Navy color scheme.

### CSS Custom Properties (CSS Variables)

```css
:root {
    /* Primary Colors */
    --oxford-navy: #1d3557ff;      /* Main brand color - Deep navy blue */
    --yale-blue: #457b9dff;        /* Secondary color - Medium blue */
    --powder-blue: #a8dadc;        /* Accent color - Light blue */
    --honeydew: #f1faffff;         /* Background - Off-white with blue tint */
    --crimson: #e63946ff;          /* Danger color - Red */
    
    /* Semantic Colors */
    --success: #48bb78;            /* Success - Green */
    --warning: #ed8936;            /* Warning - Orange */
    --danger: #e63946;             /* Error/Delete - Red */
    --info: #457b9d;               /* Information - Blue */
}
```

## Color Usage

| Component | Color | Usage |
|-----------|-------|-------|
| **Header** | Oxford Navy → Yale Blue | Gradient background |
| **Table Header** | Powder Blue | Background for column headings |
| **Primary Button** | Oxford Navy | "Add Staff", "Save" buttons |
| **Secondary Button** | Success (Green) | "API Docs" button |
| **Danger Button** | Crimson (Red) | "Delete" action |
| **Light Button** | Powder Blue | "Cancel" button |
| **Table Rows** | Honeydew | Hover background |
| **Text** | Oxford Navy | Primary text color |
| **Accents** | Powder Blue | Borders, focus states |
| **Modals** | Oxford Navy | Modal shadows, text |
| **Badges** | Oxford Navy / Green | Employee type indicators |

## Usage in HTML/CSS

### Using Variables in CSS

```css
/* Example: Custom component */
.custom-element {
    background-color: var(--honeydew);
    border: 2px solid var(--powder-blue);
    color: var(--oxford-navy);
}

.custom-element:hover {
    background-color: var(--powder-blue);
    color: white;
}
```

## Color Hex Values Reference

- **Oxford Navy**: `#1d3557`
- **Yale Blue**: `#457b9d`
- **Powder Blue**: `#a8dadc`
- **Honeydew**: `#f1faff`
- **Crimson**: `#e63946`
- **Success**: `#48bb78`
- **Warning**: `#ed8936`

## Design Principles

1. **Professional**: Navy and blue tones convey trust and professionalism
2. **Accessible**: High contrast between text and background
3. **Consistent**: Same colors used throughout for visual continuity
4. **Semantic**: Colors have meaning (red for danger, green for success)
5. **Modern**: Gradient headers and smooth transitions

## Customization

To change the color scheme globally, update the CSS variables in:
- `frontend/styles/main.css` - Primary styles
- `frontend/styles/modal.css` - Modal styles

Simply update the hex values in the `:root` selector, and all components will automatically adapt.
