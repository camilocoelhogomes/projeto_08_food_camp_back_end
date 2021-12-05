DROP DATABASE projeto_08_test;
CREATE DATABASE projeto_08_test;
\c projeto_08_test;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "restaurants" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"url_name" varchar(255) NOT NULL UNIQUE,
	"wpp_number" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"restaurant_img" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "restaurants_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
	"categorie_name" varchar(255) NOT NULL,
	"restaurant_id" integer NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "product" (
	"id" uuid NOT NULL DEFAULT uuid_generate_v4 (),
	"categorie_id" uuid NOT NULL,
	"product_img" varchar(255) NOT NULL,
	"product_name" varchar(255) NOT NULL,
	"product_description" varchar(255) NOT NULL,
	"product_price" NUMERIC(100,2) NOT NULL,
	"product_number" integer NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "categories" ADD CONSTRAINT "categories_fk0" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id");

ALTER TABLE "product" ADD CONSTRAINT "product_fk0" FOREIGN KEY ("categorie_id") REFERENCES "categories"("id") ON DELETE CASCADE;
