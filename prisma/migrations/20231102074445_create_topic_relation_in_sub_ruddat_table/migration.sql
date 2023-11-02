-- AddForeignKey
ALTER TABLE `subRuddats` ADD CONSTRAINT `subRuddats_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `topics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
