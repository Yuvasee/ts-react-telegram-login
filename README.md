# TypeScript React Telegram Login

![Telegram Login Widget](https://user-images.githubusercontent.com/7745709/87037834-845c2100-c1f5-11ea-93e4-708fdede67f4.png)

[Telegram Login Widget](https://core.telegram.org/widgets/login) wrapped up in handy React Component.

Influenced by [this repo](https://github.com/hprobotic/react-telegram-login/).

-   Typed
-   Hook component
-   Cleans up on unmount

## Usage example

```typescript
import React from 'react';
import TelegramLoginButton from '@v9v/ts-react-telegram-login';

const handleTelegramResponse = (user: any) => {
    console.log(user);
};

function App() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <b>Shalom!</b>
            <br />
            <TelegramLoginButton dataOnAuth={handleTelegramResponse} botName="lou_bookkeeper_dev_bot" />
        </div>
    );
}

export default App;
```

Resulting object example:

```typescript
{
    auth_date: 1594213579;
    first_name: 'Yuri';
    hash: 'e785537c13e00aaa2071b409c14bedf2ea55d05e984465fcabbbc593ef86a29d';
    id: 625001000;
    last_name: 'v9v';
}
```
