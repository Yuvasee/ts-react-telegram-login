import React, { useRef, useEffect } from 'react';

interface TelegramLoginButtonProps {
    botName: string;
    dataOnAuth?: (user: any) => void;
    dataAuthUrl?: string;
    buttonSize?: 'large' | 'medium' | 'small';
    cornerRadius?: number;
    requestAccess?: boolean;
    usePic?: boolean;
    lang?: string;
}

function TelegramLogin(props: TelegramLoginButtonProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const {
            botName,
            buttonSize = 'large',
            cornerRadius,
            requestAccess,
            usePic = true,
            dataOnAuth,
            dataAuthUrl,
            lang = 'en',
        } = props;

        if (!!dataAuthUrl === !!dataOnAuth) {
            throw new Error(
                'One of this props should be defined: dataAuthUrl (Redirect URL), dataOnAuth (callback fn) should be defined.'
            );
        }

        if (dataOnAuth) {
            (window as any).telegramLoginWidgetCb = dataOnAuth;
        }

        const script = document.createElement('script');
        script.async = true;

        const attributes = {
            'data-telegram-login': botName,
            'data-size': buttonSize,
            'data-radius': cornerRadius,
            'data-request-access': requestAccess ? 'write' : undefined,
            'data-userpic': usePic,
            'data-lang': lang,
            'data-auth-url': dataAuthUrl,
            'data-onauth': 'telegramLoginWidgetCb(user)',
        };

        for (const [k, v] of Object.entries(attributes)) {
            v !== undefined && script.setAttribute(k, `${v}`);
        }

        containerRef.current!.appendChild(script);

        () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
            if ((window as any).telegramLoginWidgetCb) {
                delete (window as any).telegramLoginWidgetCb;
            }
        };
    });

    return <div ref={containerRef}></div>;
}

export default TelegramLogin;