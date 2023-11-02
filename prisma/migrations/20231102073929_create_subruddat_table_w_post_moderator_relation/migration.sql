-- CreateTable

CREATE TABLE
    `subRuddats` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(191) NOT NULL,
        `slug` VARCHAR(191) NOT NULL,
        `email` VARCHAR(191) NOT NULL,
        `moderatorId` VARCHAR(191) NOT NULL,
        `avatar` VARCHAR(191) NOT NULL,
        `description` VARCHAR(191) NOT NULL,
        `welcomeMsg` VARCHAR(191) NOT NULL,
        `topicId` INTEGER NOT NULL,
        `isPublic` BOOLEAN NOT NULL DEFAULT true,
        `isNsfw` BOOLEAN NOT NULL DEFAULT false,
        `country` VARCHAR(191) NOT NULL,
        `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        `updatedAt` DATETIME(3) NOT NULL,

PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB;

-- AddForeignKey

ALTER TABLE `posts`
ADD
    CONSTRAINT `posts_subRuddatId_fkey` FOREIGN KEY (`subRuddatId`) REFERENCES `subRuddats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey

ALTER TABLE `subRuddats`
ADD
    CONSTRAINT `subRuddats_moderatorId_fkey` FOREIGN KEY (`moderatorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;