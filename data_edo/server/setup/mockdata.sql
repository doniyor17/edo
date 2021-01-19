-- Branches

INSERT INTO branches (branch_name) VALUES ('Xadra');
INSERT INTO branches (branch_name) VALUES ('Uchtepa');
INSERT INTO branches (branch_name, branch_is_main) VALUES ('Olmazor', true);

-- Departments

INSERT INTO departments (department_name, branch_id) VALUES (
	'Buxgalteriya', 'c89b9391-2931-49a6-a5a4-cb605b714e72'
);

INSERT INTO departments (department_name, branch_id) VALUES (
	'Kredit', 'c89b9391-2931-49a6-a5a4-cb605b714e72'
);

INSERT INTO departments (department_name, branch_id) VALUES (
	'Kredit', '5dd02a61-800a-4199-9b42-07c48d43e4ef'
);

INSERT INTO departments (department_name, branch_id) VALUES (
	'Xavfsizlik', '3171c2d6-81af-4517-9243-be8b5332fea3'
);

INSERT INTO departments (department_name, branch_id) VALUES (
	'Xodimlar bo`limi', 'c89b9391-2931-49a6-a5a4-cb605b714e72'
);

INSERT INTO departments (department_name, branch_id) VALUES (
	'Xodimlar bo`limi', '5dd02a61-800a-4199-9b42-07c48d43e4ef'
);

-- select
-- 	d.department_name,
-- 	b.branch_name
-- from
-- 	departments d
-- natural join branches b
-- order by department_name
-- ;

-- Users

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname ) VALUES (
	0, 'root', 'iamroot', 'Muhammad', 'Najimov', 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	1, 'HR1', 'iamhr1', 'Doniyor', 'Ibragimov', 'Ismoil ogli' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	1, 'HR2', 'iamhr2', 'Aziz', 'Naimov', 'Sherzodovich'
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	2, 'manager1', 'iammanager1', 'Bahodir', 'Qodirov', 'Azamatovich' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname ) VALUES (
	2, 'manager2', 'iammanager2', 'Fayzulla', 'Damirov' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	2, 'manager3', 'iammanager3', 'Karim', 'Halimov', 'Azizovich' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname ) VALUES (
	3, 'executor', 'iamexecutor1', 'Abdulloh', 'Raisov' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	3, 'executor', 'iamexecutor2', 'Muhiddin', 'Naimov', 'Saxibovich' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	3, 'executor', 'iamexecutor3', 'Pirmamat', 'Rasulov', 'Olimovich' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	3, 'executor', 'iamexecutor4', 'Aziza', 'Ikromova', 'Majiddin qizi' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname, user_middlename ) VALUES (
	3, 'executor', 'iamexecutor5', 'Sabrina', 'Latifova', 'Azimjanovna' 
);

INSERT INTO users ( user_role, user_username,  user_password, user_firstname, user_lastname ) VALUES (
	3, 'executor', 'iamexecutor6', 'Shaxlo', 'Daminova' 
);


--  Position

INSERT INTO positions ( position_name ) VALUES ('HR');
INSERT INTO positions ( position_name ) VALUES ('Rais');
INSERT INTO positions ( position_name ) VALUES ('Manager');
INSERT INTO positions ( position_name ) VALUES ('Buxgalter');
INSERT INTO positions ( position_name ) VALUES ('Kredit bo`lim boshlig`i');
INSERT INTO positions ( position_name ) VALUES ('Valyuta bo`lim boshlig`i');
INSERT INTO positions ( position_name ) VALUES ('Plastik kartalar bilan ishlash bo`limi boshlig`i');
INSERT INTO positions ( position_name ) VALUES ('Mijozlar bilan ishlash bo`limi boshlig`i');

-- Staff

INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( 'f01ad307-4408-48ae-b779-38b049509c5e', 'c89b9391-2931-49a6-a5a4-cb605b714e72', '44cded0d-e484-4603-801b-d1e190924b7d', 'a06e6287-2115-4382-8068-cfd648def105');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( 'cf2819aa-42e4-4aec-9f9b-ff5a3b75ef93', '5dd02a61-800a-4199-9b42-07c48d43e4ef', '00ee2037-c0b0-44e0-a595-c127b3ff97bb', 'a06e6287-2115-4382-8068-cfd648def105');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '387ce764-e351-40fa-aa26-80fd96cb5062', '3171c2d6-81af-4517-9243-be8b5332fea3', '1b622976-60d8-4d63-ab13-ce7d40d5f56a', '990d411c-d3d7-49e7-ae7e-9f242dbf3d61');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '8136e5d8-12c5-491c-ab43-f81bc4f9ca60', '5dd02a61-800a-4199-9b42-07c48d43e4ef', '32773930-aa85-4e40-a335-b02ddc6542f1', '990d411c-d3d7-49e7-ae7e-9f242dbf3d61');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '76c8543d-6557-42b0-a7a0-010dbd276861', 'c89b9391-2931-49a6-a5a4-cb605b714e72', '6b421140-c069-4dd9-88e3-ec728f4cf82b', '990d411c-d3d7-49e7-ae7e-9f242dbf3d61');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '0638ffff-0c71-4eb2-aa0c-412fe56c6284', '3171c2d6-81af-4517-9243-be8b5332fea3', '1b622976-60d8-4d63-ab13-ce7d40d5f56a', 'be6cba69-b6b1-4991-8266-5d78f1448c6d');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '6b0276e7-4008-489d-b8bc-13a6d7349c52', '3171c2d6-81af-4517-9243-be8b5332fea3', '1b622976-60d8-4d63-ab13-ce7d40d5f56a', '51547ff8-31fa-4f94-9128-8691fff12c77');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '4a6b65b3-e295-4d79-a6bd-7089618a3df4', '5dd02a61-800a-4199-9b42-07c48d43e4ef', '32773930-aa85-4e40-a335-b02ddc6542f1', 'a170b78e-3cf9-41ad-aa54-7143dcb99fc1');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '633dec23-f1f1-4ae2-82f7-3059725f9f48', '5dd02a61-800a-4199-9b42-07c48d43e4ef', '00ee2037-c0b0-44e0-a595-c127b3ff97bb', 'be6cba69-b6b1-4991-8266-5d78f1448c6d');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '152991aa-fdfa-4dcb-ac1c-efec5e606d40', 'c89b9391-2931-49a6-a5a4-cb605b714e72', '7df4ff1b-11a5-415d-8630-8a5c4b347e3c', '78939a97-271e-42f0-a97b-18e4d6a8583e');
INSERT INTO staff ( user_id, branch_id, department_id, position_id ) 
	VALUES ( '1a472420-9db9-465e-a7d6-3c30851b95ab', 'c89b9391-2931-49a6-a5a4-cb605b714e72', '6b421140-c069-4dd9-88e3-ec728f4cf82b', '0b11ba8c-3a5e-4e3f-86f2-d2c534364ca1');


-- select b.branch_id, b.branch_name, b.branch_is_main, d.branch_id, d.department_name, u.department_id, u.user_username, u.user_firstname, u.user_lastname, u.user_role, s.user_id, s.staff_id, p.position_id, p.position_name
-- from branches b
-- from users u
-- inner join departments d on b.branch_id = d.branch_id
-- inner join staff s on u.user_id = s.user_id
-- inner join positions p on 

-- select u.user_id, u.user_role, u.user_firstname, u.user_lastname, s.staff_id
-- from users u
-- natural join staff s;

select u.user_id, u.user_firstname, u.user_lastname, s.user_id, b.branch_id, b.branch_name, s.branch_id, d.department_id, d.department_name, s.department_id, s.position_id, p.position_id, p.position_name
from staff s
inner join users u on s.user_id = u.user_id
inner join branches b on s.branch_id = b.branch_id
inner join departments d on s.department_id = d.department_id
inner join positions p on s.position_id = p.position_id
where s.branch_id = 'c89b9391-2931-49a6-a5a4-cb605b714e72';

select u.user_username, u.user_firstname, u.user_lastname, b.branch_name, d.department_name, p.position_name
from staff s
natural join users u
natural join branches b
natural join departments d
natural join positions p
where s.branch_id = 'c89b9391-2931-49a6-a5a4-cb605b714e72';

select u.user_username, u.user_firstname, u.user_lastname, u.user_middlename
from staff s
natural join users u
where s.branch_id = '3171c2d6-81af-4517-9243-be8b5332fea3';
