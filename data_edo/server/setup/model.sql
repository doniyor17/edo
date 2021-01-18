create table branches (
	branch_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	branch_name CHARACTER VARYING(32) NOT NULL,
	branch_is_main boolean DEFAULT FALSE
);

create table departments (
	department_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	department_name CHARACTER VARYING(256) NOT NULL,
	branch_id uuid NOT NULL REFERENCES branches(branch_id)
);

create table users (
	user_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_role smallint DEFAULT 3,
	user_username CHARACTER VARYING(64) NOT NULL,
	user_password CHARACTER VARYING(60) NOT NULL,
	user_firstname CHARACTER VARYING(40) NOT NULL,
	user_lastname CHARACTER VARYING(40) NOT NULL,
	user_middlename CHARACTER VARYING(40),
	user_deleted_at timestamptz,
	user_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

create table positions (
	position_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	position_name CHARACTER VARYING(128) NOT NULL
);

create table staff (
	staff_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES users (user_id),
	branch_id uuid NOT NULL REFERENCES branches (branch_id),
	department_id uuid NOT NULL REFERENCES departments (department_id),
	position_id uuid NOT NULL REFERENCES positions(position_id)
);

create table documents (
	document_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES users(user_id),
	branch_id uuid NOT NULL REFERENCES branches(branch_id),
	document_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

