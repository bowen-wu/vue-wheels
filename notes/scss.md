## SCSS

### @mixin + @include VS @extend

### lighten & darken
1. lighten($color, $amount) -> Makes a color lighter. Takes a color and a number between ` 0% ` and ` 100% `, and returns a color with the lightness increased by that amount.
    - Examples:
        ```
        lighten(hsl(0, 0%, 0%), 30%) => hsl(0, 0, 30)
        lighten(#800, 20%) => #e00
        ```
2. darken($color, $amount) -> Makes a color darker. Takes a color and a number between ` 0% ` and ` 100% `, and returns a color with the lightness decreased by that amount.
    - Examples:
        ```
        darken(hsl(25, 100%, 80%), 30%) => hsl(25, 100%, 50%)
        darken(#800, 20%) => #200
        ```

