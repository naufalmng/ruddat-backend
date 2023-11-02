-- CreateTable

CREATE TABLE
    `posts` (
        `id` VARCHAR(191) NOT NULL,
        `title` VARCHAR(191) NOT NULL,
        `body` VARCHAR(191) NOT NULL,
        `url` VARCHAR(191) NOT NULL,
        `image` VARCHAR(191) NOT NULL,
        `video` VARCHAR(191) NOT NULL,
        `isPolling` BOOLEAN NOT NULL DEFAULT false,
        `pollEndDate` BOOLEAN NOT NULL,
        `isCommunity` BOOLEAN NOT NULL DEFAULT false,
        `isArchive` BOOLEAN NOT NULL DEFAULT false,
        `subRuddatId` INTEGER NOT NULL,
        `content` VARCHAR(191) NOT NULL,
        `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        `updatedAt` DATETIME(3) NOT NULL,
        `userId` VARCHAR(191) NOT NULL,

PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB;

-- AddForeignKey

ALTER TABLE `posts`
ADD
    CONSTRAINT `posts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;