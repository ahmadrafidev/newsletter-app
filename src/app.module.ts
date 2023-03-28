import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherModule } from './publisher/publisher.module';
import { SubscriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [PublisherModule, SubscriberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
