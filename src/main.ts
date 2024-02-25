import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log(process.env.TEST_ENV)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
