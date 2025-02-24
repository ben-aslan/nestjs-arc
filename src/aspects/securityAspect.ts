import { ExecutionContext, CallHandler } from "@nestjs/common";
import Aspect from "src/utils/aspects/aspect";

export default class SecurityAspect extends Aspect {
    constructor(private readonly claims: string[]) { super() }
    onBefore(context: ExecutionContext, next: CallHandler<any>): void {
        // if (this.claims.includes(context.switchToHttp().getRequest().headers['authorization'])) {

        // } else
            // throw 'sd';
    }
    onAfter(context: ExecutionContext, next: CallHandler<any>): void {
    }
    onException(error: any, context: ExecutionContext, next: CallHandler<any>): void {
    }
    onSuccess(context: ExecutionContext, next: CallHandler<any>): void {
    }

}