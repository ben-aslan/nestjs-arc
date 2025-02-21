import { ExecutionContext, CallHandler } from "@nestjs/common";
import Aspect from "src/utils/aspects/aspect";

export class ExceptionAspcet extends Aspect {
    onBefore(context: ExecutionContext, next: CallHandler<any>): void {
    }
    onAfter(context: ExecutionContext, next: CallHandler<any>): void {
    }
    onException(error: any, context: ExecutionContext, next: CallHandler<any>): void {
        console.log('on exception cache: ' + error)
    }
    onSuccess(context: ExecutionContext, next: CallHandler<any>): void {
    }

}