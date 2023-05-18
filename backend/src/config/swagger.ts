import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('NXFinity [NX Infinity Api]')
    .setLicense('NXFinity', 'https://license.nxfinity.live')
    .setVersion('1.0')
    .setDescription('It works')
    .setContact(
      'NXFinity Support',
      'https://nxfinity.live',
      'support@nxfinity.live',
    )
    .addTag('https://nxfinity.live')
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .addSecurityRequirements('bearer')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('v1/docs', app, document);
}
