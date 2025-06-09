export interface ErrorResponse {
    error: WelcomeError;
}

export interface WelcomeError {
    code:    number;
    message: string;
    errors:  ErrorElement[];
}

export interface ErrorElement {
    message:      string;
    domain:       string;
    reason:       string;
    location:     string;
    locationType: string;
}
