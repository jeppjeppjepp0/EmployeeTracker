INSERT INTO department (name) 
VALUES ("Coaching"),
       ("Player"),
       ("Front Office"),
       ("Facilities");

INSERT INTO role (title, salary, department_id)
VALUES ("Head Coach", 250000, 1),
       ("Assistant Coach", 100000, 1),
       ("Forward", 5000000, 2),
       ("Guard", 5500000, 2),
       ("GM", 1000000, 3),
       ("Consultant", 100000, 3),
       ("Owner", 2000000, 3),
       ("Janitor", 30000, 4),
       ("Ball Boy", 20000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Malone", 1, 11),
       ("Popeye", "Jones", 2, 1),
       ("Ryan", "Bowen", 2, 1),
       ("Nikola", "Jokic", 3, 1),
       ("Aaron", "Gordon", 3, 1),
       ("Michael", "Porter Jr.", 3, 1),
       ("Jamal", "Murray", 4, 1),
       ("Kentavious", "Caldwell-Pope", 4, 1),
       ("Calvin", "Booth", 5, 11),
       ("Thomas", "Balcetis", 6, 9),
       ("E Stanley", "Kroenke", 7, null),
       ("John", "Doe", 8, 10),
       ("Sum", "Gai", 9, 10);
