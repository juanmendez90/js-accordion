# js-accordion (VanillaJS Accordion)

This is Javascript solution for creating an Accordion Menu on your web page.

## Usage

### Accordion

| prop  | type                   | description                                        |
| ----- | ---------------------- | -------------------------------------------------- |
| items | arrayOf(AccordionItem) | accordionItem = { title: string, content: string } |

### Accordion Item

| prop    | type   | description          |
| ------- | ------ | -------------------- |
| title   | string | title of the section |
| content | string | collapsable content  |

## Requirements for building the solution

The solution must use the following markup

```html
<dl>
  <dt>Section 1</dt>
  <dd><p>Section 1 Content...</p></dd>
  <dt>Section 2</dt>
  <dd><p>Section 2 Content...</p></dd>
  <dt>Section 3</dt>
  <dd><p>Section 3 Content...</p></dd>
</dl>
```

### Technical requirements

- Use Sass for generate CSS
- Use ES6
- Use only Vanilla JS, without any JS framework
- Generate gh-page for publish

### Bonus

- Add new section with Ajax content
