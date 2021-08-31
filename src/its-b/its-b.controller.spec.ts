import { Test, TestingModule } from '@nestjs/testing';
import { ItsBController } from './its-b.controller';

describe('ItsBController', () => {
  let controller: ItsBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItsBController],
    }).compile();

    controller = module.get<ItsBController>(ItsBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
