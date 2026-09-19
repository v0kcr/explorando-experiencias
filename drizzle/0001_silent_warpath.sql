ALTER TABLE `inquiries` ADD `airtableRecordId` varchar(32) NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiries` ADD `airtableLastModifiedAt` timestamp;--> statement-breakpoint
ALTER TABLE `inquiries` ADD `syncStatus` enum('synced','error') DEFAULT 'synced' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiries` ADD `syncError` text;--> statement-breakpoint
ALTER TABLE `inquiries` ADD CONSTRAINT `inquiries_airtableRecordId_unique` UNIQUE(`airtableRecordId`);