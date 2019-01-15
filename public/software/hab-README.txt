 _____ _            _   _       _     _       _             
|_   _| |          | | | |     | |   | |     | |            
  | | | |__   ___  | |_| | __ _| |__ | | __ _| |_ ___  _ __ 
  | | | '_ \ / _ \ |  _  |/ _` | '_ \| |/ _` | __/ _ \| '__|
  | | | | | |  __/ | | | | (_| | |_) | | (_| | || (_) | |   
  \_/ |_| |_|\___| \_| |_/\__,_|_.__/|_|\__,_|\__\___/|_|   
  
The Hablator was created by Max Shinn: http://BernsteinForPresident.com

This is made available under the GNU General Public License version 3.  Go to gnu.org or see license.txt for details.


SERVER REQUIREMENTS:
-A web server (Apache recommended)
-PHP 5
-If you would like to use an image that displays the number of online users, you will also need the GD library for PHP installed

CLIENT REQUIREMENTS:
-For full support: Firefox 1.5+, Chrome 1+, IE 6+, Opera 9+,  Safari 3+
-For compatibility mode: any browser (including elinks!)



INSTALLATION:

-Upload the contents of the hablator folder to your web server

-Change the permissions of the following files and directories to allow everybody to write to them: "settings.ini", "uploads", "history.html", "log.html", and "db".  This can be done through your ftp client.

-Configure it to your liking (below)



CONFIGURATION:

-To personalize your setup, add "admin.php" to the end of the directory where the Hablator is installed.  For instance,
the admin section for "BernsteinForPresident.com/hab-sample/" is "BernsteinForPresident.com/hab-sample/admin.php"

-The default administrator password is "changeme" (without the quotes).


FUN:

-A graphic containing the number of users online can be found by loading the following URL in The Hablator's directory: functions.php?action=whosonline&type=image

-Text containing this information can be found in a similar fashion with the URL: functions.php?action=whosonline&type=text

-Go to "index.php?lang=XX" to enable translation of the login page, where XX is the language code. (Like "en", "es", "ru", etc.)


TRANSLATIONS:

The Hablator is translatable.  If you speak a non-English language, you can easily translate The Hablator into your native language.  To do so, make a copy of the "en.php" file in the "lang" folder.  Name it the language code of your language, followed by ".php".  Open the file with your favorite text editor and translate the English phrases in quotation marks to your native language.  Next, you email the file to me (contact info below) so I may include it in future releases. :]  Your language will be selectable in the administrator area.


OTHER:

-Feature requests can be made by emailing me at script_champ@BernsteinForPresident.com or by using the feedback form on BernsteinForPresident.com.

-If you have any problems, you can also email me at the above address.



Thank you for choosing The Hablator!