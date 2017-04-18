[![Code Climate](https://codeclimate.com/github/FaisalAbid/Simvla-Network.png)](https://codeclimate.com/github/FaisalAbid/Simvla-Network)

## Hosted Solution
We provide a fully hosted solution running on world class cloud hosting and providing a fast and functional alternative. Apply at [https://simvla.com](https://simvla.com)

##### Install mysql2 dependencies. 
See [https://github.com/brianmario/mysql2](https://github.com/brianmario/mysql2)
##### Clone the repo
    git clone https://github.com/FaisalAbid/Simvla-Network.git

## Run the Project

    cd Simvla-Network
    bundle install
    rake db:create
    rake db:migrate
    rake seed:create_roles
    rake seed:create_admin
    rake seed:create_data
    rails s
    
##### Add Roles to Admin
    rails c
    User.first << Role.first
##### Activate Users
    User.all.each {|u| u.is_enabled=true and u.save}
   
   
###### Copyright © 2013 Dynamatik // [@FaisalAbid](http://twitter.com/FaisalAbid) // [@Dynamatik](http://twitter.com/_Dynamatik) // [Dynamatik.com](http://dynamatik.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
