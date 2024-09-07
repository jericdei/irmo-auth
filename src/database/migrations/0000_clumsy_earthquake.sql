CREATE TABLE `sessions` (
	`id` text,
	`data` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);