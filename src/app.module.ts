import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    TaskModule,
    ProjectsModule,
    PaymentsModule
  ],
})
export class AppModule {}
