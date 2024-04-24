export type User = {
    fullName: {
        type: string,
        required: true
    }
    username: {
        type: string,
        unique: true,
        lowercase: true
    }
    email: {
        type: string,
        unique: true,
        lowercase: true
    }
    password?: string
}