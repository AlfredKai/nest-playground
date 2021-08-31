import { Test, TestingModule } from '@nestjs/testing';
import { ItsAController } from './its-a.controller';

describe('ItsAController', () => {
  let controller: ItsAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItsAController],
    }).compile();

    controller = module.get<ItsAController>(ItsAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
