# API

## account

### `POST /login` 用户登录

```typescript
interface Body {
    account: string;
    password: string;
}

interface Response {
    code: string;
    success: boolean;
    message?: string;
    data: {
        name: string;
        avatar: string;
        token: string;
        last_logtime: string;
    }
}
```