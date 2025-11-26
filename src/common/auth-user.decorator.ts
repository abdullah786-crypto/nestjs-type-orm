import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const AuthUser = createParamDecorator((data: string, context: ExecutionContext) => {
    const [req] = context.getArgs()
    return req.session.user
})