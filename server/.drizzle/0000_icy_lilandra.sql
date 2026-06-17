CREATE TABLE `languages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`iso_name` text NOT NULL,
	`set_1` text NOT NULL,
	`set_2` text NOT NULL,
	`set_3` text NOT NULL,
	`scope` text NOT NULL,
	`type` text NOT NULL,
	`endonyms` text NOT NULL,
	`other_names` text DEFAULT NULL,
	`notes` text DEFAULT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `languages_iso_name_unique` ON `languages` (`iso_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `languages_set_1_unique` ON `languages` (`set_1`);--> statement-breakpoint
CREATE UNIQUE INDEX `languages_set_2_unique` ON `languages` (`set_2`);--> statement-breakpoint
CREATE UNIQUE INDEX `languages_set_3_unique` ON `languages` (`set_3`);--> statement-breakpoint
CREATE TABLE `sentences` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`word_id` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`value` text NOT NULL,
	`is_checked` integer DEFAULT 0 NOT NULL,
	`is_validated` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`word_id`) REFERENCES `words`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `words` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`language_id` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`values` text NOT NULL,
	`translations` text,
	`definitions` text,
	`classes` text,
	`is_formal` integer DEFAULT 0 NOT NULL,
	`lemma` text,
	`synonyms` text,
	`antonyms` text,
	FOREIGN KEY (`language_id`) REFERENCES `languages`(`id`) ON UPDATE no action ON DELETE no action
);
