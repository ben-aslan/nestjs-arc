import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionAspcet } from './aspects/exceptionAspect';
import PerformanceAspect from './aspects/performanceAspect';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ExceptionAspcet())
  app.useGlobalInterceptors(new PerformanceAspect())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
