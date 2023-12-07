# Getting Started with XerxesUI

![XerxesUI Logo](https://i.ibb.co/HYC0xn3/Whats-App-Image-2023-12-06-at-12-35-51-e6b08234.jpg)

[![Included](https://skillicons.dev/icons?i=react,css&perline=3)](https://skillicons.dev)

XerxesUI is a UI library created in 2023 by dion and is currently in the early stages of development. It includes components like typography, button and container.

## Installation

To start using XerxesUI in your React project, follow these steps:

1. Install the package via npm:

    ```bash
    npm install @misterjs/xerxesui
    ```

2. Import the components into your project:

    ```javascript
    import { Typography, Container, Button } from '@misterjs/xerxesui';
    import "@misterjs/xerxesui/dist/cjs/index.css";
    ```
## Button Docs

You can implement the button like this

```
    <Button title="[YOUR-TITLE]" size="small | medium | large | custom" />
```

if you need the button with icon just do this

install the free icon like this

```
    npm i @irsyadadl/paranoid 
```

```
    // single
    <Button 
        title="[YOUR-TITLE]" 
        size="small | medium | large | custom"
        iconLabel={<[YOUR-ICON] />}
        iconPosition="back | front"  
    />

    // multiple
    <Button 
        multiIcon
        title="[YOUR-TITLE]" 
        size="small | medium | large | custom"
        iconLabel={[<[YOUR-ICON1-back] />, <[YOUR-ICON2-front] />]}
    />
```

![Alt text](/public/how-to-use-button.png)

## Wanna be contributor?

You can touch me on:
- 📫 reach me on yusdion3007@gmail.com
- ☎️ reach me on https://www.linkedin.com/in/aulia-rachmat-yusdion-38b54113a/
- ☕ Send me cup a coffee https://saweria.co/widgets/qr?streamKey=c225fe724bd37018534e970dee79510f

