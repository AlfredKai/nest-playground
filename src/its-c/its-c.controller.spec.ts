import { Test, TestingModule } from '@nestjs/testing';
import { ItsCController } from './its-c.controller';

describe('ItsCController', () => {
  let controller: ItsCController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItsCController],
    }).compile();

    controller = module.get<ItsCController>(ItsCController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
