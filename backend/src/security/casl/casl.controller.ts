import { Controller } from '@nestjs/common';
import { CaslService } from './casl.service';

@Controller('casl')
export class CaslController {
  constructor(private readonly caslService: CaslService) {}
}
